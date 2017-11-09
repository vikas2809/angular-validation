import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { DemoSignComponent } from './demo-sign/demo-sign.component';

export const router: Routes = [
    {path: '', component: LoginComponent},
    {path: 'logout', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'employee', component: EmployeeComponent},
    {path: 'demo', component: DemoSignComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
