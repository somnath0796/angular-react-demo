//import { Observable, Subject } from 'rxjs/Rx';

import 'rxjs/Rx';

import { Injectable } from '@angular/core';
import { Posts } from './posts.model';
import { Http } from '@angular/http';

@Injectable()
export class PostsService {
    url: string;

    constructor(private http: Http){
    }

    getPosts(userid: number) {
        this.url = 'http://jsonplaceholder.typicode.com/posts?userId=' + userid;
        return this.http.get(this.url)
        .map((responseData) => {
            return responseData.json()
        })    
    }



}