import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http: HttpClient) { }

  API_KEY = 'aaf453c4dcf4af39c76f4b4525400c58';

  public getPlaying():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}&language=en-US`);
  }


  public getId(id): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=en-US`);
  }

  public getMovie(search): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&query=${search}`);
  }









}

  
  


