import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '.././user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_details:any={};
  errorMessage:string;
  specific_user:any=[];
  field_error:boolean=false;
  authenticate_error:boolean=false;
  constructor(private userService:UserService,private router:Router) {
    this.userService.getUserDetails().subscribe(
      user_details => this.user_details=user_details,
      error => this.errorMessage =<any>error
    );
    this.userService.signup=true;
   }

  ngOnInit() {
    this.userService.signup=true;
  }
  onSignIn(email,password)
  {
    if(email===undefined||email===''||password===undefined||password==='')
      this.field_error=true;
    else
    {
      this.field_error=false;
    console.log(email);
    console.log(password);
    console.log(this.user_details);
    this.specific_user=this.user_details.respData.data;
    console.log(this.specific_user[0].role);
    for(var user of this.specific_user)
    {
      if(user.role==='admin')
      {
        if(user.email===email&&user.password===password)
        {
          localStorage.setItem('user','active');
          localStorage.setItem('admin',JSON.stringify(user));
          this.router.navigate(['/dashboard']);
        }
        else
        {
          this.authenticate_error=true;
        }
      }
    }
  }
}
ngOnDestroy()
{
  this.userService.signup=false;
}
}
