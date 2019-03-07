import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'test-app2',
    template: '<h2>Component testing with dependency</h2>'
})
export class TestApp2Component implements OnInit {
    userName = '';
    userEmail = '';
    constructor(private dataService: DataService){ }

    ngOnInit(){
        this.userName = this.dataService.userName;
        this.userEmail = this.dataService.userEmail;
    }
}