import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules, CompileMetadataResolver } from '@angular/compiler';

@Component({
  selector: 'app-thtml',
  templateUrl: './thtml.component.html',
  styleUrls: ['./thtml.component.css']
})
export class ThtmlComponent implements OnInit {
ques=['1.what is A in Mean?','2 Hello'];
  constructor() { }
  ans1 :any="";
   i:any=""
    count: any=""
   ans=['Angular','a',''];
  
  check(){
    for(let a in this.ans)
if(a==this.ans1){
  this.count++;
}
console.log(this.count);
}
  ngOnInit() {
  }

}
