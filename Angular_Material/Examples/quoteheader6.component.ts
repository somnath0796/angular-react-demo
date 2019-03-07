import {Component} from '@angular/core';


@Component({
    selector: 'quote-header',
    template: `<form>
	<input type='text' [(ngModel)]='pageTitle' name='pTitle'>	
	<input type="button" (click)="changeTitle()" value="Change Title" /><br/>
	</form>
    Preview : {{ pageTitle }}
     <CounterComponent [counter] = "counterValue" (counterChanged)="handleEvent($event)"></CounterComponent>
    <br />
    `
})

export class QuoteHeader{
    pageTitle: string = "Random Quote";
	counterValue: number = 1;
	
    changeTitle(){
        this.pageTitle = "New Random Quote";
    }

    handleEvent(arg:Event){
        console.log("The counter value is " , arg);
    }
	
    constructor(){

    }
}