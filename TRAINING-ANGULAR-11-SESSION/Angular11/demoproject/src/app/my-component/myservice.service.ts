import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');

  constructor(private httpClient:HttpClient) { }

  getCourses(): Observable<any>{
    let getCourseUrl:string = "http://localhost:8080/admin/getCourses";
    return this.httpClient.get(getCourseUrl,{headers: this.headers});
  }
}
