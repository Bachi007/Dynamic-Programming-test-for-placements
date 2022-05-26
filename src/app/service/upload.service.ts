import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }
  
  addQuestion(qtn){
    console.log(qtn)
    return this.http.post('http://localhost:3000/admin/upload', qtn);
  }

  updateqtn(qtn){
    console.log(qtn)
    return this.http.post('http://localhost:3000/admin/modify', qtn);
  }
  saveans(ans){
    console.log("service"+ans.studentname)
    return this.http.post('http://localhost:3000/saveanswer',ans);
  }
}
