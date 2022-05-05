import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PlaylistRequest } from '../model/playlist';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private baseUrl = this.base._baseUrl
  constructor(private http: HttpClient ,private base: BaseService) {

   }

   addPlaylist(payload:PlaylistRequest): Observable<any>{
    return this.http.post<any>(this.baseUrl +
      `playlist/add`, payload)
      .pipe(
      catchError(err => this.base.errorHandler(err))
    )
  }
  
  listPlaylist(page: number,size:number): Observable<any>{
    return this.http.get<any>(this.baseUrl +
    `playlist/fetch?page=`+page +`&size=`+size)
    .pipe(
      catchError(err => this.base.errorHandler(err))
    
    )
  }
  deletePlaylist(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl +
      `playlist/delete` + id)
      .pipe(
        catchError(err => this.base.errorHandler(err))
      )
  }
}
