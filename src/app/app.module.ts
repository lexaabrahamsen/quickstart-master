import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyErrorDirective } from './app.myerrordirective';
import { MyCustomIfDirective } from './app.mycustomifdirective';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MyErrorDirective, MyCustomIfDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
