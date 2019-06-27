import { Component, OnInit } from '@angular/core';
import{single} from '../service/data';
@Component({
  selector: 'app-enduser',
  templateUrl: './enduser.component.html',
  styleUrls: ['./enduser.component.css']
})
export class EnduserComponent  {

  single: any[];

  info(){
    document.getElementById('info').style.display="block";
    document.getElementById('recent').style.display="none";
    document.getElementById('settings').style.display="none";
      }
      recent(){
        document.getElementById('info').style.display="none";
        document.getElementById('recent').style.display="block";
        document.getElementById('settings').style.display="none";
          }
          
      settings(){
        document.getElementById('info').style.display="none";
        document.getElementById('recent').style.display="none";
        document.getElementById('settings').style.display="block";
          }
          updatename(){
            document.getElementById('updatename').style.display="block";
          }
          updatepass(){
            document.getElementById('updatepass').style.display="block";
          }
          updatepsw(){
            alert('Successfully updated username...');
            document.getElementById('updatepass').style.display="none";
          }
          updateemail(){
            document.getElementById('updatemail').style.display="block";
          }
          updatemail(){
            alert('Successfully updated email...');
            document.getElementById('updatemail').style.display="none";
          }
          update(){
            alert('Successfully updated username...');
            document.getElementById('updatename').style.display="none";
    
          }
  constructor() {
    Object.assign(this, { single })
  }
}


