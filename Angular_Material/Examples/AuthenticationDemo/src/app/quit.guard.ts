import { Injectable } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';
import { HomeComponent } from './home.component';
 
@Injectable()
export class QuitGuard implements CanDeactivate<HomeComponent> {
 
    constructor(private router: Router) { }
 
    canDeactivate() {
        if (window.confirm('Are you sure?')) {
            // logged in so return true
            return true;
        }
   
 
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}

