angular.module('tutor').controller("BadgeCtrl", function($scope, configService) {
    $scope.getImage = function() {
        return "assets/" + configService.getTheme() + "/images/badge.png";
    };
});
