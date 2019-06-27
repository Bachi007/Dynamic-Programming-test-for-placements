import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-loginnregister',
  templateUrl: './loginnregister.component.html',
  styleUrls: ['./loginnregister.component.css']
})
export class LoginnregisterComponent implements OnInit {
 
 username :any='';
 password :any=''; 
  errorMessage: any;
result: any;

  click(){
    this._router.navigateByUrl('/signup');
  }
  constructor(private _router:Router,private login:LoginService) {
  }
  
  submit(){
    this.errorMessage=''
    console.log("calling");
    console.log(this.username, this.password);
    var user={
      "username":this.username,
       "password":this.password    
    }
    this.login.check(user).subscribe(res=>
      {
        console.log(typeof(res))
      console.log(res)
      this.result=res['data']
        if(this.result!=null){
          localStorage.setItem('isLoggedIn',JSON.stringify(res['data']));
          if(res['data'].role=="admin"){
            this._router.navigateByUrl('/admin/admindashboard');
          }
          else{
            this._router.navigateByUrl('/user/enduser')
          }
        }
        else{
          this.errorMessage=res['Success']
        } 
        console.log('hi')
        console.log(res['data'])
      })
  
    
    
  //   else if(this.username ==='bachi' && this.password==='007'){
  //     this.errorMessage=''
  //     console.log(this.username+''+this.password);
  //     localStorage.setItem('isLoggedIn',this.username);
  //     this._router.navigateByUrl('/user/enduser');
  //   }
  //   else{
  //     this.errorMessage='Invalid Username or Password'
  //   }
  // }
  //   //  if(this.username === 'bhaskar' && this.password === '2505'){
    //   this.errorMessage=''
    //   console.log(this.username+''+this.password);
    //   this._router.navigateByUrl('/admin/statistics');
    //  }
     
    // else if(this.username ==='bachi' && this.password==='007'){
    //   this.errorMessage=''
    //   console.log(this.username+''+this.password);
    //   localStorage.setItem('isLoggedIn',this.username);
    //   this._router.navigateByUrl('/user/enduser');
    // }
    // else{
    //   this.errorMessage='Invalid Username or Password'
    // }
  }
    
  signup(){
    this._router.navigateByUrl('signup');
  }
  
  ngOnInit() {
  }

}
