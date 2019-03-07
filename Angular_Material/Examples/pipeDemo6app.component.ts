import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
      <hr/>
      <h3>Custom Pipes</h3>
	  <span>Celsius : <input type="text" [(ngModel)]="temperature"></span>
	  <span>The temperature in Fahrenheit is : {{temperature | tempConvert}}</span><br/>
	  <hr/>
      <span>String preview - {{ "This is a string" | preview : 3}}</span>
	  </div>
    `
})
export class AppComponent { 

}
