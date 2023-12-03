
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,RouterOutlet, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  public signupForm !: FormGroup;
  constructor( private formbuilder:FormBuilder,private router: Router,private http:HttpClient ) { }
  ngOnInit(): void {
    this.signupForm=this.formbuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
    })
  }
  signup(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value)
    .subscribe(res=>{
       alert("Signup succesfully");
       this.signupForm.reset();
       this.router.navigate(['signin']);
     })
    }
  }
  
  
  

