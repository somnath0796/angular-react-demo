import { Component, OnInit } from '@angular/core';
import {PeopleRepository} from './Demo1.Service';

@Component({
    selector: 'my-app',
    template: `<h1>Service Demo</h1>
    <hr/>
      <ul>
        <li *ngFor="let person of tpeople">
        Name : {{person.name}} Year Born : {{person.yearborn}}
        </li>
      </ul>
    `,
    providers: [PeopleRepository]
})
export class AppComponent implements OnInit{ 
    tpeople : Object;
    constructor(private people: PeopleRepository){
    }
    getPeople():void{
        this.tpeople = this.people.getAllPeople()
    }
     ngOnInit(){
        this.getPeople();
    }
}
