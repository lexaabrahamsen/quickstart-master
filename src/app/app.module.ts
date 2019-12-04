import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyErrorDirective } from './app.myerrordirective';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MyErrorDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
