import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DefaultComponent } from './component/default/default.component';
import { DeleteComponent } from './component/delete/delete.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { InvalidUrlComponent } from './component/invalid-url/invalid-url.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { AuthguardGuard } from './service/authguard.guard';


const routes: Routes = [
  {path:"addForm" ,component:AddEmployeeComponent,canActivate:[AuthguardGuard]},
  {path:"updateForm/:id" ,component:AddEmployeeComponent,canActivate:[AuthguardGuard]},
  {path:"empList",component:EmployeeListComponent,canActivate:[AuthguardGuard]},
  {path:"",component:LoginPageComponent},
  {path:"delete",component:DeleteComponent,canActivate:[AuthguardGuard]},
  {path:"login",component:LoginPageComponent},
  {path:"**",component:InvalidUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
