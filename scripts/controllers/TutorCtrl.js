angular.module('tutor').controller("TutorCtrl", function($scope, $window, configService, User) {
    console.log("tutor ctrl ok");


    console.log("user gender: "+ User.getResponse().gender );

    $scope.dynamicTheme = function() {
        return configService.getTheme();
    }
});
