import {Component, View} from 'angular2/core';
import {StravaService} from './strava.service';
import {Activity} from './activity';

@Component({
    selector: 'strava',
    templateUrl: 'app/views/strava.html',
    providers: [StravaService]
})
export class AppStrava {
     
    public title = 'Strava Activities';
    
    public newActivity: Activity;
    
    activities: Activity[];
    
    constructor(private _stravaService: StravaService) {
        this.newActivity = new Activity();
    }
    
    getActivities() {
        this._stravaService.getActivities().subscribe((activities) => this.activities = activities);
    }
    
    ngOnInit() {
        this.getActivities();
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
    
}
