angular.module('capstone').controller("IndexCtrl", function($scope, $window) {

    $scope.userid = Math.floor((Math.random() * 10000));

    $scope.showTutor = function() {
        console.log("showtutor ok");

        $window.location.href = "views/tutor.html";

    };

});
