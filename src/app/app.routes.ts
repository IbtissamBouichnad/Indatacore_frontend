import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DatatableComponent } from './pages/datatable/datatable.component';
import { UploaderComponent } from './pages/uploader/uploader.component';

export const routes: Routes = [
    
    {path:'',component:SigninComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'home',component:HomeComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'datatable',component:DatatableComponent},
    {path:'uploader',component:UploaderComponent},
];
