angular.module('tutor').controller("HomeCtrl", function($scope, $location, tutorServices) {
    console.log("HomeCtrl ok");

    $scope.showNext = tutorServices.nextOn;


    $scope.showPosttest = function() {
        $location.path("/posttest");
    };

    $scope.showProblems = function() {
        $location.path("/set1");
    };

    $scope.getStars = function() {

        if (tutorServices.nextOn){
        	return "star";
        }

        return "star_border";
    }

});
