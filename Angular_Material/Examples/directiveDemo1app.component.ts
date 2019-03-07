import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h4>Directive in Angular 2</h4>
    <form>
    First Name : <input type="text" name="txtFname" myFirstDirective /><br />
    Last Name : <input type="text" name="txtLname" myFirstDirective />
    </form>
    `
})
export class AppComponent{
    
}