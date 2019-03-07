import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h2>ngFor Demo</h2>
        <div *ngFor="let person of people; let i=index; let o=odd; let e=even" [ngClass]="{odd:o, even:e}">
        <span>{{ i+1 }}. {{ person.firstname }} {{ person.lastname }}</span>
        </div>
    `
})
export class AppComponent { 
     people = [
        {id: 1, firstname:'John', lastname: 'Doe', age: 30},
        {id: 2, firstname: 'Angela', lastname: 'Smith', age: 28},
        {id: 3, firstname: 'Samantha', lastname: 'Fox', age: 34}
    ];
}
