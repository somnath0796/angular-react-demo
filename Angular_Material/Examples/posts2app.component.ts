 import { Component} from '@angular/core';
 import { Posts } from './posts.model';
 import { PostsService } from './posts2.service';

 @Component({
     selector: 'my-app',
     template: `<h1>Http and Observables Demo</h1>
     <hr/>
     <ul>
     <li>{{post?.title}}  {{post?.body}}</li>
     <hr/>
     `
    
 })
 export class AppComponent { 

     post: Posts;
     //error: String;

     constructor(postsService: PostsService){

        postsService.getPosts()
        .subscribe((resp) => this.post = resp,
        (error) => console.log("Error message:   " , error));
     }
 }
