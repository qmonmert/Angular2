System.register(['angular2/platform/browser', './app.strava'], function(exports_1) {
    var browser_1, app_strava_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_strava_1_1) {
                app_strava_1 = app_strava_1_1;
            }],
        execute: function() {
            // bootstrap(AppComponent);
            browser_1.bootstrap(app_strava_1.AppStrava);
        }
    }
});
//# sourceMappingURL=main.js.map