import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h2>Pipe Demo</h2>
     <h3>Number Pipes</h3>
     <hr/>
    <span>Percent pipe - {{ score | percent: '.2' }}</span><br/>
    <span>Number pipe - {{ myNumber | number : '3.1-2'}}</span>
    <span>Number pipe with internationalization- {{ myNumber | number : '3.1-2' : 'fr'}}</span>
    `
})
export class AppComponent { 
   
    myNumber = 176.775;
    score = 0.99;
    constructor(){
        
    }
}
