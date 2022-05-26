import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { QretriveService } from '../service/qretrive.service';
@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {


  constructor(private qrtr:QretriveService) { }
  user:any=[];
  ngOnInit() {
    var rqtn={
      "role":"user",
    }

    this.qrtr.uretrive(rqtn).subscribe(res=>{
     // this.qtn=res;
      console.log(res);
      this.user=res
        })
  }

}
