import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResponse} from "../interfaces/apiResponse";
import {Movie} from "../interfaces/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_URL= 'https://www.omdbapi.com/'
  private API_KEY= '345cffae'

  constructor(private http: HttpClient) { }

  getMovies(searchTerm:string):Observable<Movie[]>{
    return this.http.get<ApiResponse>(`${this.API_URL}?s=${searchTerm}`,{
      params: {
        apikey: this.API_KEY
      }
    }).pipe(
      map(response => {
        return response.Search
      })
    );
  }
}
