angular.module('tutor').controller("Set1Ctrl", function($scope, $window, $mdDialog, $location, configService, User) {

    $scope.items = ['A', 'B', 'C', 'D', 'E'];
    $scope.progress = 0;

    var answers = ['B', 'E', 'E', 'E', 'A', 'B', 'D', 'E', 'B', 'B', 'E', 'B', 'C', 'E', 'A', 'C', 'B', 'D', 'B', 'A'];
    var userAnswer = null;
    var totalPoints = 0;

    var currentQuestion = 0;

    $scope.question = function() {
        return "../assets/" + configService.getTheme() + "/images/q-0.png";
    };

    $scope.dynamicTheme = function() {
        return configService.getTheme();
    };
    var setCurrent = function setCurrent(index) {
        userAnswer = $scope.items[index];
    };

    $scope.getCurrent = function() {
        return currentQuestion + 1;
    };

    $scope.getPoints = function() {
        return totalPoints;
    };

    $scope.processAnswer = function(value) {
        setCurrent(value);
        var dialogType = null;
        //right answer
        if (userAnswer == answers[currentQuestion]) {

            totalPoints++;

            //show dialog
            dialogType = {
                controller: 'RightCtrl',
                templateUrl: '../views/right.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            };

        } else {

            //show dialog
            dialogType = {
                controller: 'WrongCtrl',
                templateUrl: '../views/wrong.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                backgroundColor: 'transparent',
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            };
        };

        $mdDialog.show(dialogType);

        currentQuestion++;
        $scope.progress = 100 * (currentQuestion + 1) / 20;
        $scope
            .question = function() {
                return "../assets/" + configService.getTheme() + "/images/q-" + currentQuestion + ".png";
            };

        if (currentQuestion >= 20) {
            configService.setNext(true);
            User.setActivityPoints(totalPoints);
            console.log(User.getResponse());
            $location.path("/home");
        }


    }
});
