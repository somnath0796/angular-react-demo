 import { Component} from '@angular/core';
 import { Posts } from './posts.model';
 import { PostsService } from './posts1.service';

 @Component({
     selector: 'my-app',
     template: `<h1>Http and Observables Demo</h1>
     <hr/>
     <p>Posts: <em>{{posts?.length}}</em></p>
     <ul>
        <li *ngFor="let post of posts">
            {{post.title}} <br/>
            {{post.body}}
        </li>
     </ul>
     <hr/>
     `
    
 })
 export class AppComponent { 

     posts: Posts;
     //error: String;

     constructor(postsService: PostsService){

        postsService.getPosts()
        .subscribe((resp) => this.posts = resp,
        (error) => console.log("Error message:   " , error));
     }
 }

 
 
 
 
 
 