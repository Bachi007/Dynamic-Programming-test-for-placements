import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QretriveService {

  constructor(private http:HttpClient) { }
  
  qretrive(qtn){
    console.log(qtn)
    return this.http.post('http://localhost:3000/admin/retrive/name', qtn);
  }
  uretrive(role){
    console.log(role)
    return this.http.post('http://localhost:3000/user/details/all',role);
  }
  qlretrive(lang){
    console.log("language",lang);
    return this.http.post('http://localhost:3000/admin/retrive/language',lang);
  }
}
