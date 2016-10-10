angular.module("tutor", ["ngRoute", "ngResource", "ngAnimate", "ngMaterial", "tutor.services"]).config(function($routeProvider) {

    $routeProvider.
    when("/pretest", {
        templateUrl: "../views/pretest.html",
        controller: "PretestCtrl"
    }).
    when("/home", {
        templateUrl: "../views/home.html",
        controller: "HomeCtrl"
    }).
    when("/posttest", {
        templateUrl: "../views/posttest.html",
        controller: "PosttestCtrl"
    }).
    when("/set1", {
        templateUrl: "../views/set1.html",
        controller: "Set1Ctrl"
    }).
    when("/finish", {
        templateUrl: "../views/finish.html",
        controller: "FinishCtrl"
    }).
    otherwise({
        redirectTo: "/pretest"
    });

}).config(function($mdThemingProvider) {

    $mdThemingProvider.alwaysWatchTheme(true);

    // Neutral Theme
    $mdThemingProvider.theme("default")
        .primaryPalette("blue-grey")
        .accentPalette("blue-grey")
        .warnPalette("blue-grey");

    // ST-M 
    $mdThemingProvider.theme("stMale")
        .primaryPalette("blue")
        .accentPalette("blue")
        .warnPalette("blue");

    // ST-M 
    $mdThemingProvider.theme("stFemale")
        .primaryPalette("purple")
        .accentPalette("purple")
        .warnPalette("purple");
});
