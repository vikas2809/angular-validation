import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { ValidationService } from './validation.service';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { DemoSignComponent } from './demo-sign/demo-sign.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    EmployeeComponent,
    ControlMessagesComponent,
    DemoSignComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routes
  ],
  providers: [UserService,ValidationService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
