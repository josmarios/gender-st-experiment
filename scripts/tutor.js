angular.module('tutor', ['ngRoute', 'ngResource', 'ngAnimate', 'ngMaterial']).config(function($routeProvider) {

    $routeProvider.
    when('/home', {
        templateUrl: '../views/home.html',
        controller: 'HomeCtrl'
    }).
    otherwise({
        redirectTo: '/home'
    });
});
