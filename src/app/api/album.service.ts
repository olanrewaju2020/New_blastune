import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlbumRequest } from '../model/album';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private baseUrl = this.base._baseUrl 
  constructor(private http: HttpClient ,private base: BaseService) { }
  
  addAlbum(payload:AlbumRequest): Observable<any>{
    return this.http.post<any>(this.baseUrl +
      `album/add`, payload)
      .pipe(
      catchError(err => this.base.errorHandler(err))
    )
  }
  
  listAlbum(page: number,size:number): Observable<any>{
    return this.http.get<any>(this.baseUrl +
    `album/fetch?page=`+page +`&size=`+size)
    .pipe(
      catchError(err => this.base.errorHandler(err))
    
    )
  }
  deleteAlbum(id:any):Observable<any>{
    return this.http.delete<any>(this.baseUrl +
      `album/delete` + id)
      .pipe(
        catchError(err => this.base.errorHandler(err))
      )
  }
}
