angular.module('tutor').controller("TutorCtrl", function($scope, $window, $mdThemingProvider, tutorServices) {
    console.log("tutor ctrl ok");

    $mdThemingProvider.setDefaultTheme(tutorServices.getTheme());

});
