import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { DataComponent }   from './data.component';
  
@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, DataComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }