angular.module('tutor').controller("HomeCtrl", function($scope, $location, configService, User) {
    console.log("HomeCtrl ok");

    $scope.showNext = function() {
        return configService.getNext();
    };

    $scope.dynamicTheme = function() {
        console.log("theme: " + configService.getTheme());
        return configService.getTheme();
    };

    $scope.showPosttest = function() {
        $location.path("/posttest");
    };

    $scope.showProblems = function() {
        $location.path("/set1");
    };

    $scope.getStars = function() {

        if (configService.nextOn) {
            return "star";
        }

        return "star_border";
    };

    $scope.getPoints = function() {
        return User.getResponse().activityPoints;
    }

});
