import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }


  createMovie(form:any): Observable<any>{
    console.log(Object.fromEntries(form))
    return this.http.post("http://localhost:3000/movie",form);
  }

  getAllMovies(): Observable<any>{
    return this.http.get("http://localhost:3000/movies");
  }

  getMovieDetail(): Observable<any>{
    return this.http.get("http://localhost:3000/movie/1");
  }

}
