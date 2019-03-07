import { Component} from '@angular/core';
import { Stats } from './stats.model';
import { StatsService } from './stats.service';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App</h1><random-quote></random-quote>
    <hr/>
    <h2>Statistics Demo</h2>
    <p>Country: <em>{{stats?.country}}</em> - Population: {{stats?.population}}</p>
    `
    
})
export class AppComponent { 

    stats: Stats;

    constructor(statsService: StatsService){
        statsService.getStats()
        .then((stats) => this.stats = stats);
    }
    
}
