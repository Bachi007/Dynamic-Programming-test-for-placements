import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginnregisterComponent } from './loginnregister/loginnregister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CreatetestComponent } from './createtest/createtest.component';
import { JavaComponent } from './cjava/java.component';
import { EnduserComponent } from './enduser/enduser.component';
import { AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { TaketestComponent } from './taketest/taketest.component';
import { TjavaComponent } from './tjava/tjava.component';
import { ThtmlComponent } from './thtml/thtml.component';
import { HomeComponent } from './home/home.component';
import { PiechartComponent } from './piechart/piechart.component';
import { TestComponent } from './test/test.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { StatisticComponent } from './statistic/statistic.component';
import { Error404Component } from './error404/error404.component';
import { FpwComponent } from './fpw/fpw.component';
import { ViewqnsComponent } from './viewqns/viewqns.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ScoreComponent } from './score/score.component';
import { TpythonComponent } from './tpython/tpython.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule }    from '@angular/common/http';
import { DataService } from './service/data.service';
import { RegisterService } from './service/register.service';
import { ChartsModule } from 'ng2-charts';
import { CountdownModule } from 'ngx-countdown';

import { LoginService } from './service/login.service';
import { CpythonComponent } from './cpython/cpython.component';
import { CchsarpComponent } from './cchsarp/cchsarp.component';
import { TcsharpComponent } from './tcsharp/tcsharp.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginnregisterComponent,
    UserdashboardComponent,
    MyNavComponent,
    CreatetestComponent,
    JavaComponent,
    EnduserComponent,
    SignupComponent,
    TaketestComponent,
    TjavaComponent,
    ThtmlComponent,
    HomeComponent,
    PiechartComponent,
    TestComponent,
    WelcomeComponent,
    ViewStudentComponent,
    StatisticComponent,
    Error404Component,
    FpwComponent,
    ViewqnsComponent,
    UserprofileComponent,
    AdminprofileComponent,
    ScoreComponent,
    TpythonComponent,
    CpythonComponent,
    CchsarpComponent,
    TcsharpComponent
    
  
  ],
  imports: [
    NgbModule,
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    CountdownModule
  ],
  providers: [AuthService,DataService,RegisterService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
