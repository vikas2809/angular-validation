import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  logout:boolean=false;
  login:boolean=false;
  signup:boolean=false;
  constructor(private http:Http,private datePipe:DatePipe,private router:Router) { }

  transformDate(myDate) {
    console.log(myDate);
    return this.datePipe.transform(myDate, 'yyyy-MM-dd hh:mm:ss');
  }

getUserDetails()
{
  return this.http.get('http://localhost:4000/api/v1/user/getAllUser').map(res => res.json()).do(data => console.log(data)).catch(this.handleError);
}
// addUser(user)
// {
//   console.log(user);
//   let headers = new Headers({ 'Content-Type': 'application/json' });
//   let options = new RequestOptions({ headers: headers });
//   // console.log(headers+" "+options);
  
//   return this.http.post('http://localhost:4040/api/v1/user/create',user,options).do(data => console.log(data)).catch(this.handleError).subscribe();
// }

addUser(user)
{
 console.log(user);
 let headers = new Headers({ 'Content-Type': 'application/json' });
 let options = new RequestOptions({ headers: headers });
  //let body = JSON.stringify(user);
// console.log(body);
 return this.http.post('http://localhost:4000/api/v1/user/create',user,options)
 .do(data => console.log(data))
 .catch(this.handleError).
 subscribe();
}
userLogout()
{
  if(localStorage.getItem('user')==='active'){
    localStorage.removeItem('user');
    this.router.navigate(['\logout']);
}
}
private handleError(error: Response) {
  console.error(error);
  let message = `Error status code ${error.status} at ${error.url}`;
  return Observable.throw(message);
    }
}