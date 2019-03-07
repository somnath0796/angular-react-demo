import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
    <hr />
<h2>ngSwitch Demo</h2>
    <p>Choose country</p>
    <select [(ngModel)]="country">
        <option value="IN">India</option>
        <option value="GB">Britain</option>
        <option value="US">United States</option>
        <option value="MY">Malaysia</option>
    </select>
    <hr />
    <p>Currency</p>
    <div [ngSwitch]="country">
        <h3 *ngSwitchCase="'IN'">Indian Rupee</h3>
        <h3 *ngSwitchCase="'GB'">Pound Sterling</h3>
        <h3 *ngSwitchCase="'US'">US Dollar</h3>
         <h3 *ngSwitchDefault>Malaysian Ringitt</h3>
    </div>
    `
})
export class AppComponent { 
     country: string = "IN";
}
