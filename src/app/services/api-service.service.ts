import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService<T> {

  constructor(private http:HttpClient) { 

  }

  Get(endPoint:string){
      return this.http.get(environment.APi_BASE_URL + endPoint);
  }

  Post(endPoint:string,data:T){
       return this.http.post(environment.APi_BASE_URL + endPoint,data);
  }
  
}
