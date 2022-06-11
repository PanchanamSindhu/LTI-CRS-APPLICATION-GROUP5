import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  //headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient:HttpClient) { }

  loginUser(logindetails :any ): Observable<any>{
    console.log("login details in service-->"+logindetails.password);
      return this.httpClient.post<any>("http://localhost:8080/login",logindetails);

      }
}
