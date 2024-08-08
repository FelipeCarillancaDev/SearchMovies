import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../interfaces/movie";
import {debounceTime, distinct, filter, fromEvent, map, Observable, Subscription, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements  OnInit {

   movies: Movie[]  = [];
   movieSuscription!: Subscription
   @ViewChild('movieSearchInput', {static: true}) movieSearchInput!: ElementRef<HTMLInputElement>;
   movies$!:Observable<Movie[]>
  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.movies$ = fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup')
      .pipe(
        map((event: Event) => {
          const searchTerm = (event.target as HTMLInputElement).value;
          return searchTerm
        }),
        filter((searchTerm: string) => searchTerm.length > 3),
        debounceTime(500), // wait 1s after the last keystroke for new search
        distinct(), // only emit if value is different from previous value
        switchMap((searchTerm: string) => this.moviesService.getMovies(searchTerm)), // switch to new observable each time the term changes
      )
  }


  // getMovies(searchTerm: string) {
  //    // const searchTerm = (event.target as HTMLInputElement).value;
  //    this.moviesService.getMovies(searchTerm).subscribe(movie=>{
  //      this.movies = movie !== undefined ? movie : []
  //    })
  // }


}
