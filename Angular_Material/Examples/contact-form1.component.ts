import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form1.component.html'
})
export class ContactFormComponent {

    form = new FormGroup({
        firstname: new FormControl(),
        lastname: new FormControl(),
        address: new FormGroup({
            street: new FormControl(),
            zipcode: new FormControl()
        })
    });

    log(form: any){
        console.log("Is the form valid?  " , form.valid);
        console.log(form.controls['firstname'].value);
        console.log(form.controls['firstname'].valid);
    }

}