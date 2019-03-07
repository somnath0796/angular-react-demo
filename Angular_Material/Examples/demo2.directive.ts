import {Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[myFirstDirective]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    },
	exportAs : 'myDirective'
})
export class MyFirstDirective{
	styled: boolean;
    constructor(private el: ElementRef, private renderer: Renderer){
		this.styled = false;
    }
    onFocus(){
		this.changeStyle();
    }
    onBlur(){
		this.changeStyle();
    }
	changeStyle(){
		if(this.styled)
		{
			this.renderer.setElementStyle(this.el.nativeElement, 'font-weight', 'bold');
			this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
            this.styled = !this.styled;
        }
		else
		{
			this.renderer.setElementStyle(this.el.nativeElement, 'font-weight', 'normal');
			this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
            this.styled = !this.styled
        }
	}
	}