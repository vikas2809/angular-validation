import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  new_employee:boolean=false;
  delete_employee:boolean=false;
  empty_value:boolean=false;
  role:string='employee';
  constructor(private router:Router) { }
  ngOnInit() {
  }
  addEmployee()
  {
    console.log("hello");
    this.new_employee=true;
  }
  onSubmit(first_name,last_name,address,city,state,pincode,title,password,phone_number,email)
  {
    if(first_name===''&&last_name===''&&address===''&&city===''&&state===''&&pincode===''&&title===''&&password===''&&phone_number===''&&email==='')
      this.empty_value=true;
    if(first_name===undefined&&last_name===undefined&&address===undefined&&city===undefined&&state===undefined&&pincode===undefined&&title===undefined&&password===undefined&&phone_number===undefined&&email===undefined)
      this.empty_value=true;
    else{
    console.log(first_name);
    console.log(last_name);
    console.log(address);
    console.log(city);
    console.log(state);
    console.log(pincode);
    console.log(title);
    console.log(password);
    console.log(phone_number);
    console.log(email);
    console.log(this.role);
    // this.new_employee=false;
    }
  }
  onDelete()
  {
    this.delete_employee=false;
  }
  delete()
  {
    this.delete_employee=true;
  }
  back()
  {
    this.router.navigate(['\dashboard']);
  }
}
