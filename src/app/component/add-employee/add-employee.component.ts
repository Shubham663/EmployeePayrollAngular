import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
        private router: Router,
        private userService: EmployeeServiceService
  ) { }
 ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      employeeName: ['', Validators.required,Validators.maxLength(20)],
      email: ['', Validators.required],
      salary: ['', Validators.required]
      // ,localDateTime: ['',Validators.required]  
  });
  }

  onSubmit() {
    console.log(this.registerForm.value)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.userService.post(this.registerForm.value)
        .subscribe(
            data => {
                    console.log(data)
                    this.router.navigate(['']);

            },
            error => {
               console.log(error)
            });
}

    
  }
