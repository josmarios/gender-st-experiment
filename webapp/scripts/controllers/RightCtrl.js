angular.module('tutor').controller("RightCtrl", function($scope, configService) {
    $scope.getImage = function() {
        return "assets/" + configService.getTheme() + "/images/right.png";
    };
});
