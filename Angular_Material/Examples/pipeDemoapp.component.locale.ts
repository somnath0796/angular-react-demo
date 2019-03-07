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
	 <br/>
	 <p>Currency data formatted in specified locale</p>
	  <span>Country : {{item.country | uppercase}} , Currency : {{1234.345 | currency : item.currency:'symbol':'':'fr'}}</span>
	  <br/>
	  <hr/>
	  The number in french format is {{ num | number:'3.5-5' : 'fr'}}
    <br/>
    Date in french is {{today | date : 'longDate' : '' : 'fr'}}
     </div>
    `
})
export class AppComponent { 
   
    location = [
        {country: 'India', continent: 'Asia', currency: 'INR'},
        {country: 'USA', continent: 'America', currency: 'USD'},
        {country: 'Britain', continent: 'Europe', currency: 'GBP'}
    ];
	today = new Date();
	num : number = 2.34567890;
    constructor(){
        
    }
}
