angular.module('tutor').controller("Set1Ctrl", function($scope, $window, $mdDialog) {

    $scope.question = "../assets/images/q-0.png"
    $scope.items = ['A', 'B', 'C', 'D', 'E'];

    var answers = ['B', 'E', 'E', 'E', 'A', 'B', 'D', 'E', 'B', 'B', 'E', 'B', 'C', 'E', 'A', 'C', 'B', 'D', 'B', 'A'];
    var userAnswer = null;


    var currentQuestion = 0;
    $scope.progress = 0;

    $scope.setCurrent = function setCurrent(index) {
        userAnswer = $scope.items[index];
    };


    $scope.check = function(ev) {


        var dialogType = null;
        //right answer
        if (userAnswer == answers[currentQuestion]) {

            //show dialog
            dialogType = {
                controller: 'RightCtrl',
                templateUrl: '../views/right.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            };
            // currentQuestion++;

            // $scope.progress =100* (currentQuestion+1)/20;
            // $scope.question = "../assets/images/q-" + currentQuestion + ".png"

            currentQuestion++;
            $scope.progress = 100 * (currentQuestion + 1) / 20;
            $scope.question = "../assets/images/q-" + currentQuestion + ".png"
            
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

    }
});
