import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../interfaces/movie";

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrl: './card-movie.component.css'
})
export class CardMovieComponent implements OnInit {

  @Input('movie') movie!: Movie;

  ngOnInit(): void {
  }

  getImage(){
    return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'https://via.placeholder.com/300';
  }

}
