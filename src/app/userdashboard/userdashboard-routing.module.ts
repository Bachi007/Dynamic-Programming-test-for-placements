import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatetestComponent } from '../createtest/createtest.component';

export const routes: Routes = [
  
  {
    path: 'createtest',
    component:CreatetestComponent
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class   userdashboardRoutingModule{ }
