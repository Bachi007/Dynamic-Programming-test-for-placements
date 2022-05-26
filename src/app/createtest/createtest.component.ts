import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-createtest',
  templateUrl: './createtest.component.html',
  styleUrls: ['./createtest.component.css']
})
export class CreatetestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  java(){
    console.log("into java")
      this.router.navigateByUrl('/admin/java')
  }
  ccsharp(){
      this.router.navigateByUrl('/admin/ccsharp')
  }
  cpython(){
    this.router.navigateByUrl('/admin/cpython')
}


}
