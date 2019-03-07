import { Component } from '@angular/core';

@Component({
    selector: 'rounded-border',
    template: `<div style='border:2px solid black; border-radius:4px;padding:4px'>
    <ng-content></ng-content>
    </div>`
})

/* 
In the AppComponent template the usage can be
<rounded-border>Hello World!</rounded-border>
*/

export class roundedBorderComponent{

}