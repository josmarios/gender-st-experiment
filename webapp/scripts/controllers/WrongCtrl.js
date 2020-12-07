angular.module('tutor').controller("WrongCtrl", function($scope, configService) {
console.log("wrong is ok");
    $scope.getImage = function() {
        return "assets/" + configService.getTheme() + "/images/wrong.png";
    };
});
