import { Component } from '@angular/core';

@Component({
    selector: 'number-component',
    template : `<h3>{{msg}}</h3>`
})
export class NumberComponent{
    msg: string = '';
    counter: number = 0;
    increment(){
        this.counter++ ;
        this.msg = "Counter value is " + this.counter ;
    }
    decrement(){
        this.counter-- ;
        this.msg = "Counter value is " + this.counter ;
    }
	}