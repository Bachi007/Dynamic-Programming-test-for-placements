import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'angularintern';
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  isloggedIn: boolean=false;
  constructor(){

  }
  ngOnInit(){
   
  }
}
