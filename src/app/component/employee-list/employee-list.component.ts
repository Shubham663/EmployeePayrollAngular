import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeNum=0;
  @Input() selected:boolean
  employee :any= [];
  constructor(private empService:EmployeeServiceService,
              private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    console.log("getData in add-employee")
    this.empService.get().subscribe(response => {
      this.employee = response.object;
      this.employeeNum = this.employee.length;
      console.log("Response " + JSON.stringify(response.object));
    },
    error => {
      if(error.status == 403)
      console.log("List might be empty. or some other error occurred")
    });
  }

  updateEmployee(id){
    console.log(id);
    this.router.navigate(["updateForm",id])
  }

  deleteEmployee(email){
    console.log("Deleting employee with email: " + email)
    this.empService.getByEmail(email).subscribe(response => {
      this.empService.delete(response.object).subscribe((data) => {
        // console.log("error occurs inside subscribe")
        console.log(data);
        this.getData();
        this.router.navigate(["home"]);
      },
      error => {
        console.log(error);
      });
    })     
  }

  // update(node){
  //   console.log(node.id)
  //   this.employeeService.getById(node.id).subscribe(response =>{
  //      response.obj
  //     console.log("inside")
  //     this.router.navigate(['add'], response.obj)
  //   }),
  //   error =>{
  //     console.log(error)
  //   } 
  // }


  //For passing token inside of headers
  // return this.http.put(this.baseUrl + `/adminservice/company`,data,{
  //   headers:new HttpHeaders().append("Authorization",localStorage.getItem("token"))
  // });

}
