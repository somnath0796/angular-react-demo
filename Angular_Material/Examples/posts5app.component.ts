 import { Component} from '@angular/core';
 import { Posts } from './posts.model';
 import { PostsService } from './posts5.service';

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
     userid = 2;

     constructor(postsService: PostsService){

        postsService.getPosts(this.userid)
        .subscribe((resp) => this.posts = resp,
        (error) => console.log("Error message:   " , error));
     }
 }
