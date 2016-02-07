import {Injectable} from 'angular2/core';
import {Activity} from './activity';
import {Http} from 'angular2/http';

@Injectable()
export class StravaService {
    
    activities: Array<Activity>;
    
    constructor(private _http: Http) {}
    
    getActivities() {
        return this._http.get('http://localhost:3000/app/json/activities.json').map(res => res.json());
    }
    
}
