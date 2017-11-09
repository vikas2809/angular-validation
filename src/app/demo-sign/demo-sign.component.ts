import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationService } from '.././validation.service';

@Component({
  selector: 'app-demo-sign',
  templateUrl: './demo-sign.component.html',
  styleUrls: ['./demo-sign.component.css']
})
export class DemoSignComponent implements OnInit {

  userForm: any;
  
  constructor(private formBuilder: FormBuilder) {
      
      this.userForm = this.formBuilder.group({
        'name': ['', Validators.required],
        'email': ['', [Validators.required, ValidationService.emailValidator]],
        'profile': ['', [Validators.required, Validators.minLength(10)]]
      });
    
    console.log(this.userForm);
  }
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }
  ngOnInit()
  {
  }
}
