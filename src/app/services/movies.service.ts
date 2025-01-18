import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../interfaces/apiResponse";
import {Genres, Movie, Result} from "../interfaces/movie";
import {MovieCredits} from "../interfaces/director";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // private API_URL= 'https://www.omdbapi.com/'
  private API_URL = 'https://api.themoviedb.org/3/search/movie';

  // private API_KEY= '345cffae'
  private API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTA3ZDQxZjkzNDZhMGUzMTZjY2E5YmRkZjk3MTI5OSIsIm5iZiI6MTY5MTg3NTkxOC45NTYsInN1YiI6IjY0ZDdmYTRlMDAxYmJkMDEzYWVkZGYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BqM3NgkWREw1Ndl1EGIG7wpjtmEC3rqD5D3KoVz6zjc'
  private BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTA3ZDQxZjkzNDZhMGUzMTZjY2E5YmRkZjk3MTI5OSIsIm5iZiI6MTY5MTg3NTkxOC45NTYsInN1YiI6IjY0ZDdmYTRlMDAxYmJkMDEzYWVkZGYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BqM3NgkWREw1Ndl1EGIG7wpjtmEC3rqD5D3KoVz6zjc';

  constructor(private http: HttpClient) {
  }

  // getMovies(searchTerm: string): Observable<Movie[]> {
  //   return this.http.get<ApiResponse>(`${this.API_URL}?s=${searchTerm}`, {
  //     params: {
  //       apikey: this.API_KEY
  //     }
  //   }).pipe(
  //     map(response => {
  //       return response.Search
  //     })
  //   );
  // }

  // Método para buscar películas por título
  getMovies(searchTerm: string): Observable<Result[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.BEARER_TOKEN}`
    });

    return this.http.get<ApiResponse>(`${this.API_URL}`, {
      headers: headers,  // Aquí agregamos los headers
      params: {
        query: searchTerm,  // El título de la película
        language: 'en-US',  // Idioma (opcional)
        page: '1',          // Número de página (opcional)
      }
    }).pipe(
      map(response => response.results)  // Retorna la lista de películas
    );
  }

  getCredits(movieId: number): Observable<MovieCredits> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.BEARER_TOKEN}`
    });
    return this.http.get<MovieCredits>(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {headers});
  }

  getGenres() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.BEARER_TOKEN}`
    });
    return this.http.get<Genres>('https://api.themoviedb.org/3/genre/movie/list', {headers});
  }
}
