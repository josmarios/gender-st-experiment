angular.module('tutor').controller("Set1Ctrl", function($scope, $window, $mdDialog, $location, configService, User) {

    $scope.items = ['A', 'B', 'C', 'D', 'E'];
    $scope.progress = 0;

    var answers = ['B', 'E', 'E', 'E', 'A', 'B', 'D', 'E', 'B', 'B', 'E', 'B', 'C', 'E', 'A', 'C', 'B', 'D', 'B', 'A'];
    var userAnswer = null;
    var totalPoints = 0;

    var currentQuestion = 0;

    $scope.question = function() {
        return "assets/" + configService.getTheme() + "/images/q-0.png";
    };

    $scope.dynamicTheme = function() {
        return configService.getTheme();
    };
    var setCurrent = function setCurrent(index) {
        userAnswer = $scope.items[index];
    };

    $scope.getCurrent = function() {
        return Math.trunc(totalPoints / 10);
    };

    $scope.getPoints = function() {
        return totalPoints;
    };

    $scope.getQuestion = function() {
        return currentQuestion+1;
    };

    $scope.processAnswer = function(value) {
        setCurrent(value);
        var dialogType = null;

        //right answer
        if (userAnswer == answers[currentQuestion]) {

            totalPoints += 5;

            //badge level 5
            if (totalPoints == 25) {

                $mdDialog.show({
                    controller: 'Badge5Ctrl',
                    templateUrl: 'views/badge5.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });

                configService.addBadge(0);

            } else if (totalPoints == 50) {
                $mdDialog.show({
                    controller: 'Badge10Ctrl',
                    templateUrl: 'views/badge10.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });

                configService.addBadge(1);

            } else if (currentQuestion == 19) {
                $mdDialog.show({
                    controller: 'BadgeCtrl',
                    templateUrl: 'views/badge.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });

                configService.addBadge(2);
            } else {
                //show dialog
                $mdDialog.show({
                    controller: 'RightCtrl',
                    templateUrl: 'views/right.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });
            };

            setTimeout(function() {
                $mdDialog.hide();
            }, 2000);

        } else if (currentQuestion == 19) {
            $mdDialog.show({
                controller: 'BadgeCtrl',
                templateUrl: 'views/badge.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            });
        } else {

            //show dialog
            $mdDialog.show({
                controller: 'WrongCtrl',
                templateUrl: 'views/wrong.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                backgroundColor: 'transparent',
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            });

            setTimeout(function() {
                $mdDialog.hide();
            }, 2000);
        };

        // $mdDialog.show(dialogType);

        currentQuestion++;
        $scope.progress = 100 * (currentQuestion + 1) / 20;
        $scope
            .question = function() {
                return "assets/" + configService.getTheme() + "/images/q-" + currentQuestion + ".png";
            };

        if (currentQuestion >= 20) {

            configService.setNext(true);
            User.setActivityPoints(totalPoints);
            console.log(User.getResponse());
            $location.path("/home");
        };


    };
});
