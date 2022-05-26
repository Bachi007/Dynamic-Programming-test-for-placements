import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  [x: string]: any;
  
  constructor(private http: HttpClient) { 
  }

  addCandidate(candidate){
    console.log(candidate)
    return this.http.post('http://localhost:3000/register', candidate);
  }

}
