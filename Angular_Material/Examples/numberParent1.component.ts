import { Component, ViewChildren, QueryList } from '@angular/core';
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
    <hr/>
    <number-component></number-component>
    `
})
export class NumberParentComponent{
    @ViewChildren(NumberComponent) numbercomponents : QueryList<NumberComponent>
    //private numberComponent: NumberComponent;
    up(){
        this.numbercomponents.first.increment();
        console.log(this.numbercomponents.length);
    }
    down(){
        this.numbercomponents.first.decrement();
        console.log(this.numbercomponents.length);
    }

	}