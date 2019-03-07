import {Component} from '@angular/core';

@Component({
    selector: 'quote-header',
    template: `<h2>{{ pageTitle }}</h2>
	<form>
	<input type='text' [value]='pageTitle' (input)='changepageTitle($event)'>
	<input type="button" (click)="changeTitle()" value="Change Title" /><br/>
	</form>
    `
})

export class QuoteHeader{
	pageTitle: string = "Random Quote";
    constructor(){

    }
	changeTitle(){
		this.pageTitle = "New Random Quote";
	}
	changepageTitle(event: MouseEvent){
		console.log(event.target.value);
        console.log(event.target.tagName);
	}
}