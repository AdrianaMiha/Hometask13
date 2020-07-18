import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework11Component } from './homework11/homework11.component';
import { Homework12Component } from './homework12/homework12.component';
import { Homework13Component } from './homework13/homework13.component';

@NgModule({
  declarations: [
    AppComponent,
    Homework11Component,
    Homework12Component,
    Homework13Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  exports: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
