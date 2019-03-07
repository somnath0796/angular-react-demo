import { Component, ViewChild } from '@angular/core';
import { NumberComponent } from './number.component';

@Component({
    selector: 'number-parent',
    template: `<h3>Parent component using @ViewChild</h3>
    <form>
        <input type="button" (click)="up()" value="Increment"/>
        <input type="button" (click)="down()" value="Decrement"/>
    </form>
    <hr/>
    <number-component></number-component>
    `
})
export class NumberParentComponent{
    @ViewChild(NumberComponent)
    private numberComponent: NumberComponent;
    up(){
        this.numberComponent.increment();
    }
    down(){
        this.numberComponent.decrement();
    }

}