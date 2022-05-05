import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  // public _header:Headers
  // public main_Header:any;
  constructor() {
  }
  //  getToken():string{
  //   if(this.getStoreUser() !=null){
  //   return  this.getStoreUser().tokendata.access_token;
  //   }else{
  //    return "";
  //   }
   
  // }

  //  getStoreUser():LoginResponse{
  //   let user = localStorage.getItem('user')
  //   let u:LoginResponse =  JSON.parse(user)
    
  //   return u;
  // }
 
   public _baseUrl: string = 'http://localhost:8080/blastuneapi/'; 
  

  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error || "Server Error")
  // }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error || "Server Error")
  }

}
