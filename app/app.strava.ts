import {Component, View} from 'angular2/core';

export class Activity {
    constructor(public name: string, public distance: number) {
        this.name = name;
        this.distance = distance;    
    }
}

@Component({
    selector: 'strava',
    templateUrl: 'app/views/strava.html',
    directives: []
    /*
    template:`
        <div *ngFor="#activity of activities">
            {{activity.name}} Q<br><br>
        </div>
        `
     */
})
export class AppStrava {
     
    public title = 'Strava Activities';
    
    activities: Array<Activity>;
    
    constructor() {
        this.activities = new Array<Activity>();
        this.activities.push(new Activity('SL : 1h50', 25));
        this.activities.push(new Activity('Footing', 11));
    }
    
}
