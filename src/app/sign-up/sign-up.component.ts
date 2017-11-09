import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '.././user.service';
import { ValidationService } from '.././validation.service';
import { User } from '.././user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userForm: any;
  user:User;
  password_validate:boolean=false;
  user_info:any={};
  errorMessage:string;
  valid_user:any=[];
  user_error:string;
  constructor(private router:Router,private formBuilder: FormBuilder,private userService:UserService) {

    this.userForm = this.formBuilder.group({
      'first_name': ['', Validators.required],
      'last_name' : ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required,ValidationService.passwordValidator]],
      'password_confirmation': ['', [Validators.required,ValidationService.passwordValidator]]
    },
    {
      validator: ValidationService.MatchPassword // your validation method 
    });
    
    console.log(this.userForm);
    this.userService.getUserDetails().subscribe(
      user_info => this.user_info=user_info,
      error => this.errorMessage =<any>error
    );
    console.log(this.user_info);
    this.userService.login=true;
   }
   saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {

      // alert(`Name: ${this.userForm.value.first_name} Email: ${this.userForm.value.email}`);
      let date=Date.now();
      let updated_at=this.userService.transformDate(date);
      //let updated_at= new Date(updated_date);
      console.log(updated_at);
      let role='user';
      console.log(this.userForm.value.first_name);
      console.log(this.userForm.value.last_name);
      console.log(this.userForm.value.email);
      console.log(this.userForm.value.password);
      console.log(this.userForm.value.password_confirmation);
      let firstName=this.userForm.value.first_name,
          lastName=this.userForm.value.last_name,
          email=this.userForm.value.email,
          password=this.userForm.value.password;
      this.user={
        firstName:this.userForm.value.first_name,
        lastName:this.userForm.value.last_name,
        email:this.userForm.value.email,
        password:this.userForm.value.password,
        role:role,
        address:"",
        city:"",  
        state:"",
         pincode: 0 ,
        designation:"",
         phone_number: 0,
        created_at:"",
        updated_at:updated_at,

      }

      this.valid_user=this.user_info.respData.data;
      console.log(this.user);
      for(var user of this.valid_user)
      {
        console.log(user);
      //  if(user.role!=='admin'&&user.role!=='employee')
        {
          console.log("inside user");
          if(user.email!==email)
          {
            console.log("inside add user");
            this.userService.addUser(this.user);
          }
          else
          {
            this.user_error="User already Exists...";
          }
        }
      }

     
    }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.userService.login=false;
  }
}
