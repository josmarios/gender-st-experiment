angular.module('tutor').controller("HomeCtrl", function($scope, $location, configService, User) {
    console.log("HomeCtrl ok");

    $scope.showNext = configService.nextOn;

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
