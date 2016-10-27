angular.module('tutor').controller("HomeCtrl", function($scope, $location, $mdDialog, configService, User) {
    console.log("HomeCtrl ok");


    var answers = ['B', 'E', 'E', 'E', 'A', 'B', 'D', 'E', 'B', 'B', 'E', 'B', 'C', 'E', 'A', 'C', 'B', 'D', 'B', 'A'];
    var userAnswer = null;
    var totalPoints = 0;
    var currentQuestion = 0;
    var showSet1 = true;
    var level = 0;

    var inc = false;
    var dec = false;

    var updateRanking = function() {

        $scope.users = [{
            name: "Alan",
            points: 78
        }, {
            name: "Valentine",
            points: 75
        }, {
            name: "Francis",
            points: 63
        }, {
            name: "Danni",
            points: 40
        }, {
            name: "Muriel",
            points: 31
        }, {
            name: "Rosemar",
            points: 15
        }, {
            name: "Alex",
            points: totalPoints
        }];

        //sorts users
        var sortedList = $scope.users.slice(0);
        sortedList.sort(function(a, b) {
            return a.points - b.points;
        });

        $scope.users = sortedList.reverse();
    };

    var updatePoints = function(value) {
        if (value < 0 && (totalPoints + value) >= 0) {

            totalPoints += value;
            // dec = true;
            $scope.decrement = true;
            new Audio('assets/default/audio/wrong.mp3').play();
        };

        if (value > 0) {
            console.log("right answer");
            totalPoints += value;
            level++;
            // inc = true;
            $scope.increment = true;
            new Audio('assets/default/audio/right.mp3').play();
        };

        setTimeout(function() {
            $scope.$apply(function() {
                $scope.decrement = false;
                $scope.increment = false;
            });
        }, 1000);
    };

    $scope.increment = false;
    $scope.decrement = false;
    $scope.badges = [];
    $scope.items = ['A', 'B', 'C', 'D', 'E'];
    $scope.progress = 0;

    $scope.checkSet1 = function() {
        return showSet1;
    };

    $scope.setSet1 = function(value) {
        showSet1 = value;
    };

    $scope.showNext = function() {
        return configService.getNext();
    };

    $scope.showPosttest = function() {
        $location.path("/posttest");
    };

    $scope.getStars = function() {

        if (configService.nextOn) {
            return "star";
        }

        return "star_border";
    };

    $scope.getRanking = function() {
        return "assets/" + configService.getTheme() + "/images/ranking.svg";
    };

    $scope.checkBadge = function(id) {
        var result = configService.getBadges()[id];
        console.log("checking badge " + id + ": " + result);
        return result;
    };

    $scope.getBadge = function(id) {
        return "assets/" + configService.getTheme() + "/images/" + id + ".png";
    };

    $scope.getAvatar = function() {
        return configService.getAvatar();
    };

    $scope.getLevel = function() {
        return level;
    };

    $scope.chooseAvatar = function() {
        $mdDialog.show({
            controller: 'AvatarCtrl',
            templateUrl: 'views/avatar.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };

    $scope.getPoints = function() {
        console.log("getPoints called");
        return totalPoints;
    };


    //updates ranking
    updateRanking();

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

    $scope.getQuestion = function() {
        return currentQuestion + 1;
    };

    $scope.processAnswer = function(value) {
        setCurrent(value);
        var dialogType = null;

        //right answer
        if (userAnswer == answers[currentQuestion]) {

            updatePoints(5);

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

                setTimeout(function() {
                    $mdDialog.hide();
                }, 2000);


            } else if (totalPoints == 50) {
                $mdDialog.show({
                    controller: 'Badge10Ctrl',
                    templateUrl: 'views/badge10.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                });

                configService.addBadge(1);

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

                configService.addBadge(2);

                setTimeout(function() {
                    $mdDialog.hide();
                }, 2000);
            };
            // else {
            //     //show dialog (right answer)
            //     $mdDialog.show({
            //         controller: 'RightCtrl',
            //         templateUrl: 'views/right.html',
            //         parent: angular.element(document.body),
            //         clickOutsideToClose: true,
            //         fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            //     });
            // };



        } else if (currentQuestion == 19) {
            $mdDialog.show({
                controller: 'BadgeCtrl',
                templateUrl: 'views/badge.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            });

            showSet1 = false;
            setTimeout(function() {
                $mdDialog.hide();
            }, 1500);
        } else {

            updatePoints(-5);
            //show dialog
            // $mdDialog.show({
            //     controller: 'WrongCtrl',
            //     templateUrl: 'views/wrong.html',
            //     parent: angular.element(document.body),
            //     clickOutsideToClose: true,
            //     backgroundColor: 'transparent',
            //     fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            // });

            // setTimeout(function() {
            //     $mdDialog.hide();
            // }, 2000);
        };

        // $mdDialog.show(dialogType);

        currentQuestion++;
        $scope.progress = 100 * (currentQuestion + 1) / 20;
        $scope.question = function() {
            return "assets/" + configService.getTheme() + "/images/q-" + currentQuestion + ".png";
        };

        if (currentQuestion >= 20) {
            //  configService.setNext(true);
            User.setActivityPoints(totalPoints);
            console.log(User.getResponse());
            //  $location.path("/home");
            showSet1 = false;
        };

        //updates ranking
        updateRanking();

    };
});
