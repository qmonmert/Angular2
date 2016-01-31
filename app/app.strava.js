System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Activity, AppStrava;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Activity = (function () {
                function Activity(name, distance, completed) {
                    this.name = name;
                    this.distance = distance;
                    this.completed = completed;
                    this.name = name;
                    this.distance = distance;
                    this.completed = completed;
                }
                return Activity;
            })();
            exports_1("Activity", Activity);
            AppStrava = (function () {
                function AppStrava() {
                    this.title = 'Strava Activities';
                    this.newActivity = new Activity();
                    this.activities = new Array();
                    this.activities.push(new Activity('25\' + 10x100m r=30" + 20\' ', 11, true));
                    this.activities.push(new Activity('SL : 1h50', 25, true));
                    this.activities.push(new Activity('Footing', 11, false));
                }
                AppStrava.prototype.addActivity = function (activity) {
                    if (activity.name !== undefined && activity.name !== ''
                        && activity.distance !== undefined && activity.distance !== '') {
                        if (!isNaN(parseInt(activity.distance))) {
                            this.activities.push(activity);
                            this.newActivity = new Activity();
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
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppStrava);
                return AppStrava;
            })();
            exports_1("AppStrava", AppStrava);
        }
    }
});
//# sourceMappingURL=app.strava.js.map