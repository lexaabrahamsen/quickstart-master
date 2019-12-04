import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 my-error>Hello {{name}}</h1>
            <h2 *myCustomIf="condition">Hello {{name}}</h2>
            <button (click)="condition = !condition">Click</button>`,
})
export class AppComponent  { name = 'Angular'; }
