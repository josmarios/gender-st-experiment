angular.module('capstone', ['ngRoute', 'ngResource', 'ngAnimate', 'ngMaterial']).config(function($mdThemingProvider) {

   
    // Neutral Theme
    $mdThemingProvider.theme("default")
        .primaryPalette("blue-grey")
        .accentPalette("blue-grey")
        .warnPalette("blue-grey");

});
