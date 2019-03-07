import { Component } from '@angular/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html'
})
export class ContactFormComponent {
    log(form: any){
        console.log("Is the form valid?  " , form.valid);
        console.log(form.controls.firstName.value);
        console.log(form.controls.firstName.valid);
    }

}