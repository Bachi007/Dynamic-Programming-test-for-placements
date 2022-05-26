import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css'],
  providers:[AuthService]

})
export class MyNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  username: any;

  constructor(private breakpointObserver: BreakpointObserver,private auth:AuthService,private myRoute:Router) {}
ngOnInit(){
  
}
show(draw){
  console.log(draw)
  if(this.auth.isLoggedIn)
  draw.toggle()
}
user=JSON.parse(localStorage.getItem('isLoggedIn'));

Username=this.user.username;




logout() {
  localStorage.removeItem("isLoggedIn");
  this.myRoute.navigate(["loginnregister"]);
}
}

