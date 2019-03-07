import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
      <h3>Date Pipes</h3>
    <b>Medium Format : {{ today | date:'medium'}}</b><br/>
	<b>Short Format : {{ today | date:'short'}}</b><br/>
	<b>Full Date : {{ today | date:'fullDate'}}</b><br/>
	<b>Long Date : {{ today | date:'longDate'}}</b><br/>
	<b>Short Date : {{ today | date:'shortDate'}}</b><br/>
	<b>Medium Time : {{ today | date:'mediumTime'}}</b><br/>
	<b>Short Time : {{ today | date:'shortTime'}}</b><br/>
	<b>Four digit year : {{ today | date:'yyyy' }} </b><br/>
	<b>Month in year : {{ today | date:'MMMM'}}</b><br/>
	<b>Month in year : {{ today | date:'M'}}</b><br/>
	<b>Day in month : {{ today | date:'d'}}</b><br/>
	<b>Day in week : {{ today | date:'EEEE'}}</b><br/>
	<b>Hour in day : {{ today | date:'HH'}}</b><br/>
	<b>Minute in hour : {{ today | date:'mm'}}</b><br/>
	<b>Second in minute : {{ today | date:'ss'}}</b><br/>
	<b>Custom formatting : {{ today | date:'EEEE, MMMM d, yyyy' | uppercase}}</b>
    </div>
    `
})
export class AppComponent { 
today = new Date();
}
