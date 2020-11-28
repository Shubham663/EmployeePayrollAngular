import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employee :any= [];
  constructor(private empService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    console.log("getData in add-employee")
    this.empService.get().subscribe(response => {
      this.employee = response;
      console.log("Response " + JSON.stringify(response));
    },
    error => {
      console.log(error)
    });
  }

}
