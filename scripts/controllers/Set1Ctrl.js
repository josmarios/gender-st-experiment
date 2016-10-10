angular.module('tutor').controller("Set1Ctrl", function($scope, $window, $mdDialog, $location, configService, User) {

    $scope.question = "../assets/images/q-0.png"
    $scope.items = ['A', 'B', 'C', 'D', 'E'];

    var answers = ['B', 'E', 'E', 'E', 'A', 'B', 'D', 'E', 'B', 'B', 'E', 'B', 'C', 'E', 'A', 'C', 'B', 'D', 'B', 'A'];
    var userAnswer = null;
    var totalPoints = 0;

    var currentQuestion = 0;
    $scope.progress = 0;

    $scope.dynamicTheme = function() {
        return configService.getTheme();
    };
    $scope.setCurrent = function setCurrent(index) {
        userAnswer = $scope.items[index];
    };

    $scope.check = function(ev) {

        var dialogType = null;
        //right answer
        if (userAnswer == answers[currentQuestion]) {

            totalPoints++;

            //show dialog
            dialogType = {
                controller: 'RightCtrl',
                templateUrl: '../views/right.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            };

        } else {

            //show dialog
            dialogType = {
                controller: 'WrongCtrl',
                templateUrl: '../views/wrong.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                backgroundColor: 'transparent',
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            };
        }

        $mdDialog.show(dialogType);

        currentQuestion++;
        $scope.progress = 100 * (currentQuestion + 1) / 20;
        $scope.question = "../assets/images/q-" + currentQuestion + ".png"

        if (currentQuestion >= 20) {
            configService.setNext(true);
            User.setActivityPoints(totalPoints);
            console.log(User.getResponse());
            $location.path("/home");
        }


    }
});
