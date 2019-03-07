import {Component, OnInit, OnChanges, OnDestroy, SimpleChange, Input} from '@angular/core';

@Component({
    selector: 'hooks-component',
    template: `<h2>Hooks Demo</h2>
    <span>{{text}}</span>
    `
})
export class HooksDemo implements OnInit, OnChanges, OnDestroy{
    @Input() text: string;
    constructor(){
        console.log("Constructor");
    }
    ngOnInit(){
        console.log("On Init");
    }
	
	//The method receives a SimpleChanges object of current and previous property values.
	
    ngOnChanges(changes: {[propertyName: string]: SimpleChange}){
        console.log("On Changes");
		console.log(changes['text'].currentValue);
		//console.log(changes['text'].previousValue);
    }
    ngOnDestroy(){
        console.log("On Destroy");
    }
}