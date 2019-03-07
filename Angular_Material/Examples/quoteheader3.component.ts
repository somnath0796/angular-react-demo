import {Component} from '@angular/core';

@Component({
    selector: 'quote-header',
    template: `<h2>{{ pageTitle }}</h2>
	<input type="button" (click)="changeTitle()" value="Change Title" /><br/>
    `
})

export class QuoteHeader{
	pageTitle: string = "Random Quote";
    constructor(){

    }
	changeTitle(){
		this.pageTitle = "New Random Quote";
	}
}