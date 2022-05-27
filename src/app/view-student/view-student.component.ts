import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { DataService } from '../service/data.service';
import { QretriveService } from '../service/qretrive.service';
@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  userScore: any=[];
  username: any;


  constructor(private qrtr:QretriveService,private dataservice:DataService) { }
  user:any=[];
  userdetails:any={
  
  }
  ngOnInit() {
    var rqtn={
      "role":"user",
    }

    this.qrtr.uretrive(rqtn).subscribe(res=>{
     // this.qtn=res;
      console.log(res);
      this.user=res;
      for(let enduser of this.user){
    this.dataservice.getuserdata(enduser['username']).subscribe((res)=>{
      this.userScore=res['Scores']
      this.username=res['username']
      console.log(this.userScore )
        })
      }
  });
  }
}
