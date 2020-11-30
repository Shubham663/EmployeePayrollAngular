import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  baseUrl1="assets/json/employee.json" ;
  // = "http://localhost:8080/hello/get/list";
  baseURL:string = environment.employeeUrl;
  constructor(private http:HttpClient) { }

  get():Observable<any>{
    return this.http.get<any>(this.baseURL+"/hello/get/list");
  }

  post(data):Observable<any>{
    return this.http.post(this.baseURL+"/hello/post",data)
}

}
