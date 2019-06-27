import { Component, OnInit } from '@angular/core';
import { UploadService } from '../service/upload.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cchsarp',
  templateUrl: './cchsarp.component.html',
  styleUrls: ['./cchsarp.component.css']
})
export class CchsarpComponent implements OnInit {


  qtn: any;

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
         "language":"c"
        
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
  