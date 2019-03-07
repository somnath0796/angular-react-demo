import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'CounterComponent',
    inputs: ['counter'],
    outputs: ['counterChanged'],
    template: `
    <div (click)='counterEvent()'>
    Click here!
    </div>
    `
})

export class CounterComponent{
    counter: number;
    public counterChanged = new EventEmitter();

    constructor(){
        console.log("Counter component");
    }
    counterEvent(evt:Event){
        this.counterChanged.emit(this.counter);
        this.counter++;
    }
}
