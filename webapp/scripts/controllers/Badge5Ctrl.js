angular.module('tutor').controller("Badge5Ctrl", function($scope, configService) {
    $scope.getImage = function() {
        return "assets/" + configService.getTheme() + "/images/badge5.png";
    };
});
