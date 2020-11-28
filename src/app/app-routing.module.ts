import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { InvalidUrlComponent } from './component/invalid-url/invalid-url.component';


const routes: Routes = [
  {path:"addForm" ,component:AddEmployeeComponent},
  {path:"empList",component:EmployeeListComponent},
  {path:"**",component:InvalidUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
