import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import 'rxjs/Rx' 
import {AppStrava}    from './app.strava'

bootstrap(AppStrava, [HTTP_PROVIDERS]);
