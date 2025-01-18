import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieBackenService {

  private URL_API = 'http://localhost:3000/api/v1/movie';

  constructor(private http: HttpClient) {
  }

  save(movie: any) {
    return this.http.post(this.URL_API, movie).pipe(
      catchError(error => {
        console.error('Error al guardar la película', error);
        return throwError(error);  // Lanza el error para ser capturado en el componente
      })
    ).subscribe(response => {
      console.log('Respuesta del backend:', response);
    });
  }
}
