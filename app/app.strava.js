System.register(['angular2/core', './strava.service', './activity'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, strava_service_1, activity_1;
    var AppStrava;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (strava_service_1_1) {
                strava_service_1 = strava_service_1_1;
            },
            function (activity_1_1) {
                activity_1 = activity_1_1;
            }],
        execute: function() {
            AppStrava = (function () {
                function AppStrava(_stravaService) {
                    this._stravaService = _stravaService;
                    this.title = 'Strava Activities';
                    this.newActivity = new activity_1.Activity();
                }
                AppStrava.prototype.getActivities = function () {
                    var _this = this;
                    this._stravaService.getActivities().subscribe(function (activities) { return _this.activities = activities; });
                };
                AppStrava.prototype.ngOnInit = function () {
                    this.getActivities();
                };
                AppStrava.prototype.addActivity = function (activity) {
                    if (activity.name !== undefined && activity.name !== ''
                        && activity.distance !== undefined && activity.distance !== '') {
                        if (!isNaN(parseInt(activity.distance))) {
                            this.activities.push(activity);
                            this.newActivity = new activity_1.Activity();
                        }
                    }
                };
                AppStrava.prototype.removeActivity = function (activity) {
                    this.activities.splice(this.activities.indexOf(activity), 1);
                };
                AppStrava.prototype.setCompleted = function (activity) {
                    activity.completed = !activity.completed;
                };
                AppStrava = __decorate([
                    core_1.Component({
                        selector: 'strava',
                        templateUrl: 'app/views/strava.html',
                        directives: [],
                        providers: [strava_service_1.StravaService]
                    }), 
                    __metadata('design:paramtypes', [strava_service_1.StravaService])
                ], AppStrava);
                return AppStrava;
            })();
            exports_1("AppStrava", AppStrava);
        }
    }
});
//# sourceMappingURL=app.strava.js.map