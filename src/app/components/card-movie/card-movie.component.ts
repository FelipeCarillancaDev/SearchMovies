import {Component, Input, OnInit} from '@angular/core';
import {Genre, Genres, Movie, MovieRequest, Result} from "../../interfaces/movie";
import {MovieBackenService} from "../../services/movie-backen.service";
import {MoviesService} from "../../services/movies.service";
import {MovieCredits, Person} from "../../interfaces/director";

import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
})
export class CardMovieComponent implements OnInit {

  @Input('movie') movie!: Result;
  private movieRequest: MovieRequest | undefined;
  private movieCredits: MovieCredits | undefined;

  constructor(private movieBackenService: MovieBackenService,
              private moviesService: MoviesService) {
  }

  ngOnInit(): void {
  }

  getImage() {
    const posterPath = this.movie.poster_path;
    return posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : 'https://via.placeholder.com/300';
  }

  async selectMovie() {

    this.movieCredits = await firstValueFrom(this.moviesService.getCredits(this.movie.id));
    const genres = await firstValueFrom(this.moviesService.getGenres());

    const generos: Genre[] = genres.genres
      .filter((genero) => this.movie.genre_ids.includes(genero.id))

    const generosList: string[] = generos.map((genero) => genero.name);
    console.log("generosList: ", generosList);
    const directingCrew: Person[] = this.movieCredits.crew.filter(member => member.job === "Director");
    const directorName = directingCrew[0].name;

    console.log("directorName", directorName);

    this.movieRequest = {
      title: this.movie.title,
      year: this.movie.release_date.toString(),
      genre: generosList,
      director: directorName,
      synopsis: this.movie.overview,
      average_rating: this.movie.vote_average
    }

    console.log(this.movie)
    this.movieBackenService.save(this.movieRequest);  // Aquí se llama al servicio movieBackenService.s
  }

}
