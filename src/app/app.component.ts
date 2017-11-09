import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private userService:UserService){
    //this.userService.signup=true;
    //this.userService.login=true;
    this.userService.logout=false
    //this.userService.show=true;
  }
  onLogout()
  {
    this.userService.userLogout();
  }
}
