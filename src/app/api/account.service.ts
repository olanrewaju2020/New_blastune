import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountRequest } from '../model/account';
import { BaseService } from './base.service';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = this.base._baseUrl 
  constructor(private http: HttpClient ,private base: BaseService) {
    
   }
   addAccount(payload:AccountRequest): Observable<any>{
    return this.http.post<any>(this.baseUrl +
      `account/add`, payload)
      .pipe(
      catchError(err => this.base.errorHandler(err))
    )
  }
  
  fetchAccount(page: number,size:number): Observable<any>{
    return this.http.get<any>(this.baseUrl +
    `account/fetch?page=`+page +`&size=`+size)
    .pipe(
      catchError(err => this.base.errorHandler(err))
    
    )
  }
  deleteAccount(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl +
      `account/delete` + id)
      .pipe(
        catchError(err => this.base.errorHandler(err))
      )
  }
}
