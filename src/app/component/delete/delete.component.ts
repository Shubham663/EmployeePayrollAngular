import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  email;
  employeeName;
  salary;
  employee;

  
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
        private userService: EmployeeServiceService
  ) { }
 ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      employeeName: ['', [Validators.required,Validators.maxLength(20)]],
      email: ['', [Validators.required]],
      salary: ['', [Validators.required]]
      // ,localDateTime: ['',Validators.required]  
  });
  }


  submit(){
    console.log("Submit called")
    // this.employee = {
    //   employeeName: this.employeeName,
    //   email:this.email,
    //   salary: this.salary
    // }
    this.userService.delete(this.registerForm.value).subscribe((data) => {
      // console.log("error occurs inside subscribe")
      console.log(data);
      window.location.replace('empList');
    },
    error => {
      console.log(error);
    });
  }

}
