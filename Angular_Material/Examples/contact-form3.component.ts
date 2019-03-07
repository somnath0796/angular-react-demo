function zipValidator(zip:any){
        var valid = /^\d{6}$/.test(zip.value);
        if (valid)
            return null;
        else
            return {valid: false};
    }

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form1.component.html'
})
export class ContactFormComponent {

    form = new FormGroup({
        firstname: new FormControl('',Validators.required),
        lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
        address: new FormGroup({
            street: new FormControl(),
            zipcode: new FormControl('', [Validators.required,zipValidator])
        })
    });



    log(form: any){
        console.log("Is the form valid?  " , form.valid);
        console.log(form.controls.firstname.value);
        console.log(form.controls.firstname.valid);
        console.log(form.controls.address.controls.zipcode.value);
    }

}