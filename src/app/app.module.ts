import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeServiceService } from './service/employee-service.service';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { InvalidUrlComponent } from './component/invalid-url/invalid-url.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { AuthguardGuard } from './service/authguard.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    InvalidUrlComponent,
    LoginPageComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [EmployeeServiceService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
