import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginnregisterComponent } from './loginnregister/loginnregister.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CreatetestComponent } from './createtest/createtest.component';
import { JavaComponent } from './cjava/java.component';
import { EnduserComponent } from './enduser/enduser.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { TaketestComponent } from './taketest/taketest.component';
import { ThtmlComponent } from './thtml/thtml.component';
import { HomeComponent } from './home/home.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { TestComponent } from './test/test.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { StatisticComponent } from './statistic/statistic.component';
import { Error404Component } from './error404/error404.component';
import { FpwComponent } from './fpw/fpw.component';
import { ViewqnsComponent } from './viewqns/viewqns.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { TjavaComponent } from './tjava/tjava.component';
import { ScoreComponent } from './score/score.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { TpythonComponent } from './tpython/tpython.component';
import { CpythonComponent } from './cpython/cpython.component';
import { CchsarpComponent } from './cchsarp/cchsarp.component';
import { TcsharpComponent } from './tcsharp/tcsharp.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/loginnregister',
    pathMatch: 'full'
  },
  {
  path : 'admin',
  component : MyNavComponent,
  children:[
    {
      path: 'createtest',
   component:CreatetestComponent,
   
    },
    {
      path: 'statistics',
   component:StatisticComponent
    },
    {
      path: 'admindashboard',
     component:StatisticComponent
    },
    {
      path: 'viewstudent',
     component:ViewStudentComponent
    },
    {
      path: 'enduser',
      component: EnduserComponent
    },
    {
      path: 'java',
     component:JavaComponent,
    },
    {
      path: 'taketest',
     component:TaketestComponent
    },{
      path: 'cpython',
     component:CpythonComponent,
    },
    {
      path: 'ccsharp',
     component:CchsarpComponent,
    },
    {
      path: 'thtml',
     component:ThtmlComponent,
    },
    {
      path: 'viewqns',
     component:ViewqnsComponent,
    },
    {
      path: 'adminprofile',
     component:AdminprofileComponent,
    },
  ]
  },
  
  {
    path : 'user',
    component : MyNavComponent,
    children:[
      {
        path: 'userdashboard',
       component:UserdashboardComponent
      },
      {
        path: 'enduser',
        component: EnduserComponent
      },
      {
        path: 'taketest',
       component:TaketestComponent
      },
      {
        path: 'thtml',
       component:ThtmlComponent
      },
      {
        path: 'tjava',
       component:TjavaComponent
      },
      {
        path: 'tpython',
       component:TpythonComponent
      },
      {
        path: 'tcsharp',
       component:TcsharpComponent
      },
      {
        path: 'test',
       component:TestComponent
      },
      {
        path: 'score',
       component:ScoreComponent
      }
    ]
    },
  {
    path: 'loginnregister',
    component: LoginnregisterComponent
  },
  {
    path: 'enduser',
    component: EnduserComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'admindashboard',
   component:UserdashboardComponent
  },
  {
    path: 'java',
   component:JavaComponent,
  },
  {
    path: 'thtml',
   component:ThtmlComponent,
  },
  {
    path: 'tpython',
   component:TpythonComponent,
  },
  {
    path: 'createtest',
   component:CreatetestComponent
  },
  {
    path: 'taketest',
   component:TaketestComponent
  },
  {
    path: 'signup',
   component:SignupComponent
  },
  {
    path: 'error404',
   component:Error404Component
  },
  {
    path: 'fpw',
   component:FpwComponent
  },
  {
    path: '**',
    redirectTo: '/error404',
    pathMatch: 'full'
  },
 
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
