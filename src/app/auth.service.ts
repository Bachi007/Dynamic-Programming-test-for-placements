import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
@Injectable()
export class AuthService {
  constructor(private myRoute: Router) { }
  
  isLoggedIn() {
  //  console.log(JSON.parse(localStorage.getItem('isLoggedIn')))
    if(localStorage.getItem('isLoggedIn')!=null){
      return true
    }
    else{
      return false
    }
  }
  isAdmin(){
     var user=JSON.parse(localStorage.getItem('isLoggedIn'))
     
       if(user.role==='admin'){
         return true;
       }
       else{
         return false
       }
      }
  // isUser(){
  //   var user=JSON.parse(localStorage.getItem('isLoggedIn'))
  //       if(user==='bachi'){
  //         return true;
      
  //      }
      
     
    }
  

  
