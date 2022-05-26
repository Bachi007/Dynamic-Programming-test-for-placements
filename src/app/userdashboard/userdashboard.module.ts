import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {  userdashboardRoutingModule } from './userdashboard-routing.module';
import { CreatetestComponent } from '../createtest/createtest.component';
 

@NgModule({
  declarations: [
    CreatetestComponent
  ],
  imports: [
    BrowserModule,
    userdashboardRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: []
})
export class userdashboardModule { }
