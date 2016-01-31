import {Component, View} from 'angular2/core';

export class Activity {
    constructor(public name?: string, public distance?: number, public completed?: boolean) {
        this.name = name;
        this.distance = distance;  
        this.completed = completed;  
    }
}

@Component({
    selector: 'strava',
    templateUrl: 'app/views/strava.html',
    directives: []
    /* template:`
        ...
        ` */
})
export class AppStrava {
     
    public title = 'Strava Activities';
    
    public newActivity: Activity;
    
    activities: Array<Activity>;
    
    constructor() {
        this.newActivity = new Activity();
        this.activities = new Array<Activity>();
        this.activities.push(new Activity('25\' + 10x100m r=30" + 20\' ', 11, true));
        this.activities.push(new Activity('SL : 1h50', 25, true));
        this.activities.push(new Activity('Footing', 11, false));
    }
    
    addActivity(activity) {
        if (activity.name !== undefined && activity.name !== ''
            && activity.distance !== undefined && activity.distance !== '') {
            if (!isNaN(parseInt(activity.distance))) {  
                this.activities.push(activity);
                this.newActivity = new Activity();
            }
        }
    }
    
    removeActivity(activity) {
        this.activities.splice(this.activities.indexOf(activity), 1);
    }
    
    setCompleted(activity) {
        activity.completed = !activity.completed;
    }
    
}
