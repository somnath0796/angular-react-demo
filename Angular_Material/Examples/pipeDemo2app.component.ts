import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h2>Pipe Demo</h2>
     <h3>Currency Pipes</h3>
     <hr/>
     <div *ngFor = "let item of location">
     <span>Country : {{item.country | uppercase}} , Currency : {{1234 | currency : item.currency:'code'}}</span>
	 <br/>
	 <span>Country : {{item.country | uppercase}} , Currency : {{1234 | currency : item.currency:'symbol'}}</span>
     </div>
    `
})
export class AppComponent { 
   
    location = [
        {country: 'India', continent: 'Asia', currency: 'INR'},
        {country: 'USA', continent: 'America', currency: 'USD'},
        {country: 'Britain', continent: 'Europe', currency: 'GBP'}
    ];
    constructor(){
        
    }
}
