import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  getByEmail(email):Observable<any>{
    return this.http.post<any>(this.baseURL+"/employee/getbyemail",email,{
      headers:new HttpHeaders().append("Authorisation",localStorage.getItem("token")),
    });
  }

  addCredentials(data):Observable<any>{
    return this.http.post(this.baseURL+"/employee/signup",data);
  }
  baseUrl1="assets/json/employee.json" ;
  // = "http://localhost:8080/hello/get/list";
  baseURL:string = environment.employeeUrl;
  constructor(private http:HttpClient) { }

  get():Observable<any>{
    return this.http.get<any>(this.baseURL+"/employee",{
      headers:new HttpHeaders().append("Authorisation",localStorage.getItem("token")),
    })
  }
    // For passing token inside of headers
// return this.http.put(this.baseUrl + `/adminservice/company`,data,{
//   headers:new HttpHeaders().append("Authorization",localStorage.getItem("token"))
// }););

  getById(id):Observable<any>{
    return this.http.get<any>(this.baseURL+"/employee/"+id,{
      headers:new HttpHeaders().append("Authorisation",localStorage.getItem("token")),
    });
  }

  post(data):Observable<any>{
    return this.http.post(this.baseURL+"/employee",data,{
      headers:new HttpHeaders().append("Authorisation",localStorage.getItem("token")),
    })
  }

  checkCredentials(data):Observable<any>{
    return this.http.post(this.baseURL+"/employee/signin",data);
  }

  delete(data):Observable<any> {
    console.log(data)
    const options = {
      body: {
        employeeName: data.employeeName,
        email: data.email,
        salary: data.salary
      },
      headers:new HttpHeaders().append("Authorisation",localStorage.getItem("token")),
    }
    // return this.http.request('delete',this.baseURL+"/employee",options)
    return this.http.delete(this.baseURL+"/employee",options);
  }

  put(data):Observable<any> {
    return this.http.put(this.baseURL+"/employee",data,{
      headers:new HttpHeaders().append("Authorisation",localStorage.getItem("token")),
    });
  }
  
}
