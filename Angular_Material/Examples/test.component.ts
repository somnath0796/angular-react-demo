import { Component } from '@angular/core';

@Component({
    selector: 'test-component',
    template: `<div>
    <h2>Hello {{name}}</h2>
    </div>`
})
export class TestComponent{
    name: string = "Lakshman"
	}