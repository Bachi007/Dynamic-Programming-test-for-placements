import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

import { RegisterService } from 'src/app/service/register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x: string]: any;
  useremail: any;
  usename: any;
  Cpassword: any;
  Password: any;
  addUser: any;
 // registerservice: any;

  constructor(private _router:Router,private register: RegisterService) { }
  click(){
    this._router.navigateByUrl('/loginnregister');
  }
  signup(){
    alert('Successfully Registered');
    this._router.navigateByUrl('/loginnregister');
    var newUser = {
      "role":"user",
      "email": this.useremail,
      "username": this.username,
      "password": this.Password,
      "passwordConf": this.Cpassword
    }
    this.register.addCandidate(newUser).subscribe(result => {
      console.log(result);
      this.addUser=result;
      console.log("candidate details are :",this.addUser)
  })
  }
  login(){
    this._router.navigateByUrl('/loginnregister');
  }
  ngOnInit() {
  }

}
