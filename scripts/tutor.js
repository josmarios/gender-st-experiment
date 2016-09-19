angular.module('tutor', ['ngRoute', 'ngResource', 'ngAnimate', 'ngMaterial']).config(function($routeProvider) {

    $routeProvider.
    when('/home', {
        templateUrl: '../views/home.html',
        controller: 'HomeCtrl'
    }).
    when('/posttest', {
        templateUrl: '../views/posttest.html',
        controller: 'PosttestCtrl'
    }).
    when('/set1', {
        templateUrl: '../views/set1.html',
        controller: 'Set1Ctrl'
    }).
    otherwise({
        redirectTo: '/home'
    });
});
