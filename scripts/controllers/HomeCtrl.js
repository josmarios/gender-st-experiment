angular.module('tutor').controller("HomeCtrl", function($scope, $location, $mdDialog, configService, User) {
    console.log("HomeCtrl ok");


    var answers = ['B', 'E', 'E', 'E', 'A', 'B', 'D', 'E', 'B', 'B', 'E', 'B', 'C', 'E', 'A', 'C', 'B', 'D', 'B', 'A'];
    var userAnswer = null;
    var totalPoints = 0;
    var currentQuestion = 0;
    var showSet1 = true;
    var totalPoints = 0;
    var userAvatar = "assets/" + configService.getTheme() + "/images/avatar1.png";
    var level = 0;

    var inc = false;
    var dec = false;

    $scope.badges = [];
    $scope.items = ['A', 'B', 'C', 'D', 'E'];
    $scope.progress = 0;

    $scope.number = 6;

    $scope.increment = false;
    $scope.decrement = false;

    $scope.users = [{
        name: "Alan",
        points: 79,
        avatar: "assets/" + configService.getTheme() + "/images/ranking1.png"
    }, {
        name: "Valentine",
        points: 75,
        avatar: "assets/" + configService.getTheme() + "/images/ranking2.png"
    }, {
        name: "Francis",
        points: 63,
        avatar: "assets/" + configService.getTheme() + "/images/ranking3.png"
    }, {
        name: "Danni",
        points: 27,
        avatar: "assets/" + configService.getTheme() + "/images/ranking4.png"
    }, {
        name: "Alex",
        points: totalPoints,
        avatar: userAvatar
    }];

    $scope.getNumber = function(num) {
        var array = new Array(num);
        console.log(num);
        for (var i = 0; i < num; i++) {
            array.push(i);
        };

        return array;
    };

    $scope.getBar = function() {
        return "assets/" + configService.getTheme() + "/images/bar.png";

    };

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

    $scope.getRanking = function(value) {
        // var source = "assets/" + configService.getTheme() + "/images/ranking" + (value + 1) + ".png";
        return $scope.users[value].avatar;

    };

    $scope.checkBadge = function(id) {
        var result = configService.getBadges()[id];
        return result;
    };

    $scope.getBadge = function(id) {
        return "assets/" + configService.getTheme() + "/images/" + id + ".png";
    };

    $scope.getAvatar = function() {
        return userAvatar;
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

        return totalPoints;
    };


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

    $scope.getUserName = function(index) {
        return $scope.users[index].name;
    };

    $scope.getUserPoints = function(index) {
        
        return $scope.users[index].points;
    };

    var updatePoints = function(value) {

        if (value < 0 && (totalPoints + value) >= 0) {

            // dec = true;
            decrement = true;
            new Audio('assets/default/audio/wrong.mp3').play();
        };

        if (value > 0) {
            console.log("right answer");
            level++;
            // inc = true;
            increment = true;
            new Audio('assets/default/audio/right.mp3').play();
        };

        totalPoints += value;

        //updates ranking
        var sortedList = $scope.users.slice(0);
        sortedList.sort(function(a, b) {
            return a.points - b.points;
        });

        $scope.users = sortedList.reverse();

        setTimeout(function() {
            decrement = false;
            increment = false;
        }, 1000);

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

            updatePoints(-5)

        };


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

    };
});
