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

  
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
        private userService: EmployeeServiceService,
        private router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.maxLength(20),Validators.email]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[\\W])(?!.*\\W\\w*\\W)[a-zA-Z0-9\\W]{8,}')]]  
  });
  }

  
  getEmailError(){
    return this.loginForm.get('email').hasError('required')? "The email cannot be blank":
    this.loginForm.get('email').hasError('maxlength')? "The email should be less than 20 characters":
    this.loginForm.get('email').hasError('email')? "The email is not of required pattern.":"";
  }

  getPasswordError(){
    return this.loginForm.get('password').hasError('required')? "The password cannot be blank":
    this.loginForm.get('password').hasError('pattern')? "The password must contain atleast 1 " + 
                                            "capital letter and digit and exactly 1 special charcater":"";
  }

  onLogin() {
    console.log(this.loginForm.value)
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        console.log("Invalid data entered")
        return;
    }
    this.userService.checkCredentials(this.loginForm.value)
        .subscribe(
            data => {
                    console.log(data)
                    if(data.statusCode == 200){
                      localStorage.setItem('token',data.object)
                      this.list();
                    }
            },
            error => {
               console.log(error)
            });
  }

  onSignUp(){
    console.log(this.loginForm.value)
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        console.log("Invalid data entered")
        return;
    }
    this.userService.addCredentials(this.loginForm.value)
        .subscribe(
            data => {
                    console.log(data)
                    this.router.navigate([""])
            },
            error => {
               console.log(error)
            });
  }
//   email: ['', [Validators.required,Validators.maxLength(20)],Validators.email],
//   password: ['', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[\\W])(?!.*\\W\\w*\\W)[a-zA-Z0-9\\W]{8,}')]]  
// });

  list(){
    this.router.navigate(["home"])
  }

}