import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  constructor(private datservice:DataService) { }
  
  info(){
    document.getElementById('info').style.display="block";
    document.getElementById('recents').style.display="none";
    document.getElementById('settings').style.display="none";
      }
      recent(){
    document.getElementById('info').style.display="none";
    document.getElementById('recents').style.display="block";
    document.getElementById('settings').style.display="none";
      }
      settings(){
        document.getElementById('info').style.display="none";
        document.getElementById('recents').style.display="none";
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
    somepro:string=''
check(){
  
}
  ngOnInit() {
    // console.log(this.datservice.lang)
//this.somepro=this.datservice.check();
  }

}
