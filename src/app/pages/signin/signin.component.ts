import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports:  [CommonModule, RouterOutlet, RouterLink,ReactiveFormsModule,HttpClientModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent  implements OnInit {
  public signinForm !:FormGroup
  constructor( private formbuilder:FormBuilder,private router: Router,private http:HttpClient ) { }
  ngOnInit(): void {
    this.signinForm=this.formbuilder.group({
      email:[''],
      password:[''],
    })
  }

  signin() {
    this.http.get<any>("http://localhost:3000/signupUsers")
      .subscribe(res=>{
          const user = res.find((a: any) => {
            return a.email === this.signinForm.value.email && a.password === this.signinForm.value.password;
          });
          if (user) {
            alert("Login success !");
            this.signinForm.reset();
            this.router.navigate(['home']);
          }else {
            alert("User not found");
          }
        }
        )
  }
}
