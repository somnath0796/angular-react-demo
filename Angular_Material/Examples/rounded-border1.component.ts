import { Component } from '@angular/core';

@Component({
    selector: 'rounded-border',
    template: `<div style='border:2px solid black; border-radius:4px;padding:4px'>
    <h2><ng-content select=".header"></ng-content></h2>
    <hr />
    <div><ng-content select=".body"></ng-content></div>
    <hr />
    <div style='text-align:center;font-family:verdana'><ng-content select=".footer"></ng-content></div>
    </div>`
})
export class roundedBorderComponent{

}