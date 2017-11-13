import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'earthsm_firebase'}),
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
