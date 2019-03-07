import { Observable, Subject } from 'rxjs/Rx';

import 'rxjs/Rx';

import { Injectable } from '@angular/core';
import { Posts } from './posts.model';
import { Http } from '@angular/http';

@Injectable()
export class PostsService {
    url: string = 'http://jsonplaceholder.typicode.com/posts/1';

    constructor(private http: Http){
    }

    getPosts() {
        return this.http.put(this.url, { 'id': 1, 'userId':1, 'title':'Hello World', 'body':'This is a new post!'})
        .map((responseData) => {
            return responseData.json()
        })    
    }



}