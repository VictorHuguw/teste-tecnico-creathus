import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }


  createMovie(form:any): Observable<any>{
    console.log(form)
    return this.http.post("http://localhost:4200/movie",form);
  }

  getAllMovies(): Observable<any>{
    return this.http.get("http://localhost:4200/movies");
  }

  getMovieDetail(): Observable<any>{
    return this.http.get("http://localhost:4200/movie/1");
  }

}
