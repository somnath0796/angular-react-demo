import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
    template: `
    <h2>Animals Listing</h2>
    <div>{{ message }}</div>
    `
})
export class AnimalDetailsComponent implements OnInit{
    id: number;
    message: string;
    constructor( private route: ActivatedRoute,
    private router: Router){
    }

    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            this.id = params['id'];
        })
        if(this.id == 2)
            this.message = "This is a listing for Wild Animals";
        else
            this.router.navigate(['/animals']);
    }

}