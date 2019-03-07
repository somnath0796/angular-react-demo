import {Component} from '@angular/core';
@Component({
  selector: 'app',
  template: '<span>{{name}}</span>'
})
export class TestApp {
  private name: string = 'Lakshman';

  sayHello(): string {
    return `Hello ${this.name}`;
  }
}
