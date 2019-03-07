import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<h2>ngIf Demo</h2>
    <h3>Course Details</h3>
    <p>Course content goes here...</p>
    <hr />
    <div *ngIf="comments.length>0">
        <p style="background-color:#FFAA33;font-family:Verdana;color:#000000">Comments</p>
    </div>
    <div [hidden]="comments.length==0">
        <p style="background-color:#FFAA33;font-family:Verdana;color:#000000">Comments</p>
    </div>
    <div *ngIf="comments.length==0">
        <p style="background-color:aqua;font-family:Verdana;color:#000000">There are no comments yet</p>
    </div>
    <div [hidden]="comments.length>0">
         <p style="background-color:aqua;font-family:Verdana;color:#000000">There are no comments yet</p>
    </div>
    `
})
export class AppComponent { 
     comments:string[] = [];
}
