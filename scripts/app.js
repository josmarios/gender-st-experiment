angular.module('capstone', ['ngRoute', 'ngResource', 'ngAnimate', 'ngMaterial']).config(function($mdThemingProvider) {

       // Neutral Theme
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('green');

    // // ST-M 
    // $mdThemingProvider.theme('stMale')
    //     .primaryPalette('blue')
    //     .accentPalette('green');

    // // ST-M 
    // $mdThemingProvider.theme('stFemale')
    //     .primaryPalette('purple')
    //     .accentPalette('pink');

    // $mdThemingProvider.setDefaultTheme("default");
    // $mdThemingProvider.alwaysWatchTheme(true);

});
