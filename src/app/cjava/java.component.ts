import { Component, OnInit } from '@angular/core';
import { UploadService } from '../service/upload.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
  qtn: any;
  op1: any;
  op2: any;
  op3: any;
  op4: any;
  r1: any;
  addqtn: Object;
  closeResult: string;
  [x: string]: any;

  user=JSON.parse(localStorage.getItem('isLoggedIn'));

  Username=this.user.username;
  constructor(private upload:UploadService,private router:Router,private modalService: NgbModal) { }
  
  
  
  submit(content){
  if(this.qtn==null||this.qtn==''){
    
  }
  else{
    var uploadqtn={
      "adminname":this.Username,
       "question":this.qtn,
       "language":"java"
      
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
