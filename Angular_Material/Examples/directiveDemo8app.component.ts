import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h2>ngFor Demo</h2>
        <div *ngFor="let person of people| slice:0:3 as topThree; index as i; odd as o; even as e" [ngClass]="{odd:o, even:e}">
          <span>{{ i+1 }}/{{topThree.length}}. {{topThree[i].age}} - {{ person.firstname }} {{ person.lastname }}</span>
        </div>
    `
})
export class AppComponent { 
     people = [
        {id: 1, firstname: 'John', lastname: 'Doe', age: 30},
        {id: 2, firstname: 'Angela', lastname: 'Smith', age: 28},
        {id: 3, firstname: 'Samantha', lastname: 'Fox', age: 34},
        {id: 4, firstname: 'Justin', lastname: 'Hammer', age: 40}
    ];
}
