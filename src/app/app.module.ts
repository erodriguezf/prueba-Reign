import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentservicioComponent } from './components/componentservicio/componentservicio.component';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ComponentservicioComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, BrowserAnimationsModule,MatSelectModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
