import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
        private userService: EmployeeServiceService,
        private router:Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.maxLength(20)]],
      password: ['', [Validators.required]]  
  });
  }

  onLogin() {
    console.log(this.registerForm.value)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        console.log("Invalid data entered")
        return;
    }
    this.userService.checkCredentials(this.registerForm.value)
        .subscribe(
            data => {
                    console.log(data)
                    localStorage.setItem('token',data.object)
                    this.list();
            },
            error => {
               console.log(error)
            });
  }

  onSignUp(){
    console.log(this.registerForm.value)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        console.log("Invalid data entered")
        return;
    }
    this.userService.addCredentials(this.registerForm.value)
        .subscribe(
            data => {
                    console.log(data)
                    this.list();
            },
            error => {
               console.log(error)
            });
  }

  list(){
    this.router.navigate(["empList"])
  }

}