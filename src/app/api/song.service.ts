import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SongRequest } from '../model/song';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private baseUrl = this.base._baseUrl
  constructor(private http: HttpClient, private base: BaseService) {

  }

  addSong(payload: SongRequest): Observable<any> {
    return this.http.post<any>(this.baseUrl +
      `song/add`, payload)
      .pipe(
        catchError(err => this.base.errorHandler(err))
      )
  }

  listSong(page: number, size: number): Observable<any> {
    return this.http.get<any>(this.baseUrl +
      `song/fetch?page=` + page + `&size=` + size)
      .pipe(
        catchError(err => this.base.errorHandler(err))

      )
  }
  deleteSong(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl +
      `song/delete` + id)
      .pipe(
        catchError(err => this.base.errorHandler(err))
      )
  }

}
