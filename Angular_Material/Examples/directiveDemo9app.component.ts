import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h4>Directive in Angular 2</h4>
    <form>
    First Name : <input type="text" name="txtfname" myFirstDirective 
    #directive='myDirective'/>
    <br/>
    <input type="button" name="btn1" (click)='directive.changeStyle()'
    value="Button1" />
	</form>
    `
})
export class AppComponent{
    
}