import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '.././user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
welcome:string;
  constructor(private router:Router,private userService:UserService) {
    if(localStorage.getItem('user')==='admin')
    this.welcome='Admin';
    this.userService.logout=true;
   }

  ngOnInit() {
  }
  onDetails()
  {
    this.router.navigate(['\employee']);
  }
  ngOnDestroy()
  {
    this.userService.logout=false;
  }
}
