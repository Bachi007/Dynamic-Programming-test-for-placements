import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
next(){
  document.getElementById('q2').style.display='block';
  document.getElementById('q1').style.display='none';
  

}
  ngOnInit() {
  }

}
