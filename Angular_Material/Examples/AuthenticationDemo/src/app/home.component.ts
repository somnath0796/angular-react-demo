import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';
 
@Component({
    moduleId: module.id,
    template: `
    <div class="col-md-6 col-md-offset-3">
    <h1>Home</h1>
    <p>You're logged in with JWT!!</p>
    <div>
        Users from secure api end point:
        <ul>
            <li *ngFor="let user of users">{{user.firstName}} {{user.lastName}}</li>
        </ul>
    </div>
    <p><a [routerLink]="['/login']">Logout</a></p>
</div>
    
    `
})
 
export class HomeComponent implements OnInit {
    users: User[] = [];
 
    constructor(private userService: UserService) { }
 
    ngOnInit() {
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }
 
}