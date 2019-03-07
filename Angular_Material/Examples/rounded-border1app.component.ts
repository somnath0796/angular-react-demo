import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <rounded-border>
    <div class="header">Heading</div>
    <div class="body">Hello World!</div>
    <div class="footer">Footer content</div>
    </rounded-border>
    `
})
export class AppComponent { 

}
