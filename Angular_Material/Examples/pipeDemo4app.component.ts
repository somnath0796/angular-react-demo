import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h2>Pipe Demo</h2>
     <h3>Array Slice Pipes</h3>
     <hr/>
    <span>List items after index : 2 - {{companies | slice : "2"}}</span><br/>
    <span>List items after index : 2 and before index : 3 - {{companies | slice : "2" : "3"}}</span>
    
    `
})
export class AppComponent { 
   
    companies = ['Apple', 'Bluestar', 'CapGemini', 'Dell'];
    constructor(){
        
    }
}
