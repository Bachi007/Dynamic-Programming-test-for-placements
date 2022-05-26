import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  closeResult: string;
  userScore: any=[];
  userdata: any;

  constructor(private modalService: NgbModal,private dataservice:DataService) { }
  showScore(content){
    this.modalService.open(content, {backdrop:false,centered:true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
 




  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('isLoggedIn'));
    
    this.dataservice.getuserdata(this.userdata['username']).subscribe((res)=>{
this.userScore=res['Scores']
    })
  }

}
