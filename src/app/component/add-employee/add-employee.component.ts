import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employee :any= [];
  constructor(private empService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.empService.get().subscribe(response => {
      this.employee = response.data;
      console.log("Response " + JSON.stringify(response.data));
    },
    error => {
      console.log(error)
    });
  }
}
