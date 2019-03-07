import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'CounterComponent',
    template: `
    <div (click)='counterEvent()'>
    Click here!
    </div>
    `
})

export class CounterComponent{
    @Input() counter: number;
    @Output() counterChanged = new EventEmitter();

    constructor(){
        console.log("Counter component");
    }
    counterEvent(evt:Event){
        this.counterChanged.emit(this.counter);
        this.counter++;
    }
}
