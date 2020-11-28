import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  baseUrl = "assets/json/employee.json";

  constructor(private http:HttpClient) { }

  get():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }


}
