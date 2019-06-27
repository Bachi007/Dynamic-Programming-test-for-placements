import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { _ } from 'underscore';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  lang=[
    'java','jsp','JavaScript'
  ]
check(Tsdata){
  let data={
    script :Tsdata.script,
    language: Tsdata.language,
   
  }

  console.log(data)
   
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  let options = { headers: headers };
    return this.http.post("http://localhost:3000/checkLogic", data,options).pipe(
      map(Response=>Response));
  
}
storeScore(Tsdata){
  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  let options = { headers: headers };
    return this.http.post("http://localhost:3000/insertScore", Tsdata,options).pipe(
      map(Response=>Response));
  
}
getuserdata(Tsdata){
  console.log(Tsdata)
  
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
let options = { headers: headers };
  return this.http.post("http://localhost:3000/getUserdata", {username:Tsdata},options).pipe(
    map(Response=>Response));

}
sendMail(Tsdata){
  console.log(Tsdata)
  
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
let options = { headers: headers };
  return this.http.post("http://localhost:3000/sendemail", Tsdata,options).pipe(
    map(Response=>Response));

}
getPager(totalItems:number, currentPage: number = 1, pageSize: number = 1) {
  // calculate total pages
  let totalPages = Math.ceil(totalItems / pageSize);

  // ensure current page isn't out of range
  if (currentPage < 1) { 
      currentPage = 1; 
  } else if (currentPage > totalPages) { 
      currentPage = totalPages; 
  }
  
  let startPage: number, endPage: number;
  if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
  } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
          startPage = 1;
          endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
          startPage = totalPages - 9;
          endPage = totalPages;
      } else {
          startPage = currentPage - 5;
          endPage = currentPage + 4;
      }
  }

  // calculate start and end item indexes
  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  // create an array of pages to ng-repeat in the pager control
  let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

  // return object with all pager properties required by the view
  return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
  };
}

  email(candidate){
    console.log(candidate)
    return this.http.post('http://localhost:3000/sendemail', candidate).pipe(
      map(Response=>Response));
    
  }



  constructor(private http:HttpClient) { }
}
