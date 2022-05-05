import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = this.base._baseUrl +"/upload/"
  constructor(private http: HttpClient ,private base: BaseService) {
    
   }

  
  
}
