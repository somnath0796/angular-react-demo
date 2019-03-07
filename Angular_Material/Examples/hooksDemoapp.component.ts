import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
    <hr/>
     <hooks-component [text]="txtString"></hooks-component>
    `
})
export class AppComponent { 
    txtString = "Hello Angular World";
}
