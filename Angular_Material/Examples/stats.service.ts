//import { Observable, Subject } from 'rxjs/Rx';

import 'rxjs/Rx';

import { Injectable } from '@angular/core';
import { Stats } from './stats.model';
import { Http } from '@angular/http';

@Injectable()
export class StatsService {

    constructor(private http: Http){
    }

    getStats(): Promise<Stats> {
        return this.http.get('./stats.json').toPromise()
            .then((response) => response.json())
        
    } 
}