angular.module('tutor').controller("Badge10Ctrl", function($scope, configService) {
    $scope.getImage = function() {
        return "assets/" + configService.getTheme() + "/images/badge10.png";
    };
});
