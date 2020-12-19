import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  id;
  edit;
  profileImage:String;
  // departments:FormGroup
  registerForm: FormGroup;
  gender;
  checked1:boolean;
  options=[
    {title:'Sales'},{title:'Marketing'},{title:'Products'},{title:'IT'}
  ]
  images:String[] =["../../../assets/images/Ellipse -3.png","../../../assets/images/Ellipse -8.png",
                    "../../../assets/images/Ellipse 1.png","../../../assets/images/Ellipse -7.png"];
  constructor(
    private formBuilder: FormBuilder,
        private userService: EmployeeServiceService,
        private route:ActivatedRoute,
        private router: Router
  ) { }

 ngOnInit(): void {
   this.checked1 = false;
    this.id = this.route.snapshot.params.id;
    if(this.id != undefined){
      console.log("id inside add-employee " + this.id)
      this.getEmployeeData();
    }

    this.registerForm = this.formBuilder.group({
      employeeName: ['', [Validators.required,Validators.maxLength(10)]],
      email: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      profileImage: [''],
      gender:[''],
      departments: this.formBuilder.array([])
    });
  }

  
  onChange(title: string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.registerForm.controls.departments;

    if (isChecked) {
      emailFormArray.push(new FormControl(title));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == title)
      emailFormArray.removeAt(index);
    }
    console.log(emailFormArray.value);
  }
  

  getEmployeeData():any{
    this.userService.getById(this.id).subscribe(response => 
      {
        console.log(response.object);
        this.registerForm.setValue(response.object);
      });
  }
  // this.employeeObj = this.router.getCurrentNavigation().extras;


  onSubmit() {
    console.log(this.registerForm.value)
    //stop here if form is invalid
    if (this.registerForm.invalid) {
        console.log("Invalid data entered")
        return;
    }
    if(this.route.snapshot.params.id == undefined){
      this.userService.post(this.registerForm.value)
          .subscribe(
              data => {
                      console.log(data)
                      this.router.navigate(['home']);
                      // this.list();

              },
              error => {
                console.log(error)
              });
    }
    else{
      if (this.registerForm.invalid)
              return;
      this.userService.put(this.registerForm.value)
      .subscribe(
        data => {
                console.log(data)
                this.router.navigate(['home']);
                // this.list();
        },
        error => {
          console.log(error)
          console.log("Update could not be performed as the user was not found");
        });
    }
  }

  // update(){
  //   console.log(this.registerForm.value)
  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //       return;
  //   }
  //   this.userService.put(this.registerForm.value).subscribe(data => {
  //     console.log(data);
  //   },
  //   error => {
  //     console.log(error);
  //     console.log("Update could not be performed as no user with the provided email found");
  //     this.list();
  //   });
  // }

  getFnameError(){
    return this.registerForm.get('employeeName').hasError('required')? "The name cannot be blank":
    this.registerForm.get('employeeName').hasError('maxlength')? "The name should be less than 10 characters":"";
  }

  getEmailError(){
    return this.registerForm.get('email').hasError('required')? "The email cannot be blank":"";
  }
  
  getSalaryError(){
    return this.registerForm.get('salary').hasError('required')? "Please provide the salary of the employee":"";
  }

  list(){
    window.location.replace("empList")
  }

}
