import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h2>Elvis operator Demo</h2>
        <div>
          <span>First Name : {{ person[0].firstname }}</span><br/>
          <span>Last Name : {{ person[0].lastname }} </span><br />
          <span>Email : {{ person[0].work?.email }} </span><br />
        </div>
        <h2>ngFor Demo</h2>
        <div *ngFor="let person of people; let i=index">
        <span>{{ i+1 }}. {{ person.firstname }} {{ person.lastname }} {{person.work?.email}}</span>
        </div>
    `
})
export class AppComponent { 
    person = [
        {id: 1, firstname:'John', lastname: 'Doe'},
    ];
    people = [
        {id: 1, firstname:'John', lastname: 'Doe', work:{email:'john@mycompany.com'}},
        {id: 2, firstname: 'Angela', lastname: 'Smith', age: 28},
        {id: 3, firstname: 'Samantha', lastname: 'Fox', age: 34}
    ];
}
