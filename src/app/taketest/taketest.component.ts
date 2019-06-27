import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrls: ['./taketest.component.css']
})
export class TaketestComponent implements OnInit {

  constructor(private router:Router) { }
  logout() {
    localStorage.removeItem("isLoggedIn");
    this.router.navigate(["loginnregister"]);
  }
  java(){
    console.log("into java")
      this.router.navigateByUrl('/user/tjava')
  }
  ccsharp(){
      this.router.navigateByUrl('/user/tcsharp')
  }
 
python(){
  this.router.navigateByUrl('/user/tpython')
}
  ngOnInit() {
  }

}
