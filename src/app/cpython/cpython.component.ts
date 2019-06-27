import { Component, OnInit } from '@angular/core';
import { UploadService } from '../service/upload.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cpython',
  templateUrl: './cpython.component.html',
  styleUrls: ['./cpython.component.css']
})
export class CpythonComponent implements OnInit {

  qtn: any;
  op1: any;
  op2: any;
  op3: any;
  op4: any;
  r1: any;
  addqtn: Object;
  closeResult: string;
  [x: string]: any;

  constructor(private breakpointObserver: BreakpointObserver,private auth:AuthService,private upload:UploadService,private router:Router,private modalService: NgbModal) { }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));

Username=this.user.username;

  submit(content){
  //   document.getElementById('q2').style.display='block';
  //   document.getElementById('q1').style.display='none';
  if(this.qtn==null||this.qtn==''){
 
  }
  else{
    var uploadqtn={
      "adminname":this.Username,
       "question":this.qtn,
       "language":"python"
      
    }

    this.upload.addQuestion(uploadqtn).subscribe(res=>{
      this.addqtn=res;
      console.log('addqtn');
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      
  this.router.navigateByUrl('/admin/viewqns')
    })
  
  }
}
  ngOnInit() {
  }

}
