import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  baseUrl = "http://localhost:8080/hello/get/list";

  constructor(private http:HttpClient) { }

  get():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }


}
