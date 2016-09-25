angular.module('tutor', ['ngRoute', 'ngResource', 'ngAnimate', 'ngMaterial']).config(function($routeProvider, $mdThemingProvider) {

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

    // Neutral Theme
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('green');

    // ST-M 
    $mdThemingProvider.theme('stMale')
        .primaryPalette('blue')
        .accentPalette('green');

    // ST-M 
    $mdThemingProvider.theme('stFemale')
        .primaryPalette('purple')
        .accentPalette('pink');

    $mdThemingProvider.setDefaultTheme('default');



});
