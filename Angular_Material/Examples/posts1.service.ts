
import { Injectable } from '@angular/core';
import { Posts } from './posts.model';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class PostsService {
    url: string = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http){
    }

    getPosts() {
        return this.http.get(this.url)
        .pipe(map((responseData) => {
            return responseData.json()
        }))
        
    }



}