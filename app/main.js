System.register(['angular2/platform/browser', 'angular2/http', 'rxjs/Rx', './app.strava'], function(exports_1) {
    var browser_1, http_1, app_strava_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (app_strava_1_1) {
                app_strava_1 = app_strava_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_strava_1.AppStrava, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map