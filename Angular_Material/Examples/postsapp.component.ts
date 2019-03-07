 import { Component} from '@angular/core';
 
 import { Posts } from './posts.model';

 import { PostsService } from './posts.service';

 @Component({
     selector: 'my-app',
     template: `
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

     constructor(postsService: PostsService){
         postsService.getPosts()
         .then((posts) => this.posts = posts);
     }
    
 }
