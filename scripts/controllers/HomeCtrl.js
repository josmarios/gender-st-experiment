angular.module('tutor').controller("HomeCtrl", function($scope, $location) {

    console.log("home ctrl ok");


    $scope.showPosttest = function() {
        console.log("show posttest ok");

        $location.path("/posttest");

    };


    $scope.showProblems = function() {
      
        $location.path("/set1");

    };
});
