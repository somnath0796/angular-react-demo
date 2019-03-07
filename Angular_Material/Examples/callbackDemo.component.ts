import { Component } from '@angular/core';

@Component({
    selector: 'callback',
    template: `
    <h1>Callback Demo</h1>
    <p style="font-size: 150%">Result: <strong>{{result}}</strong></p>
    <p>Time: <strong>{{time}}</strong></p>
    <p>Error: <strong>{{error}}</strong></p>
    `
})
export class CallbackComponent{

    result: any;
    error: any;
    time: any;

    constructor(){
        const startTime = Date.now();
        this.add(5, 2, (result: any) => {
            this.add(result, -10, (result: any) => {
                this.add(result, 1, (result: any) => {
                    this.result = result;
                    this.time = Date.now() - startTime;
            }, (error: any) => this.error = error);
        }, (error: any) => this.error = error);
    }, (error: any) => this.error = error);
 }
    add(x: any, y: any , callback: any, errorcallback: any) {
        setTimeout(() => {
            const result = x + y;
            if(result >= 0) {
                callback(result);
            } else {
                errorcallback('Invalid value: ' + result);
            }
        }, 100);
    }
}