import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(meta: Meta){
        meta.addTag({name:'author', content:'Lakshman'});
        meta.addTag({name:'description', content:'Awesome stuff'})
        this.currentAuthor = meta.getTag('name="author"');
        console.log(this.currentAuthor);
        meta.removeTag('name="author"');
    }
}
