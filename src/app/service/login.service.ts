import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  check(candidate){
    console.log(candidate)
    return this.http.post('http://localhost:3000/login', candidate).pipe(
      map(Response=>Response));
    
  }

}
