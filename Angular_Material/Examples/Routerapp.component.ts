 import { Component} from '@angular/core';


 @Component({
     selector: 'my-app',
    template: `
    <h1>Angular Router Demo</h1>
    <hr/>
    <!-- Navigation with router directives -->
    <div>
        <div><a routerLink='/'>Home</a></div>
        <div><a routerLink='/animals'>Animals</a></div>
        <div><a routerLink='/birds'>Birds</a></div>
    </div>
    <hr/>
    <router-outlet></router-outlet>
    `  
 })
 export class AppComponent { 

 }
