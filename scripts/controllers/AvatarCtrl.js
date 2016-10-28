angular.module('tutor').controller("AvatarCtrl", function($scope, $mdDialog, configService) {
    $scope.getImage = function(value) {
        return "assets/" + configService.getTheme() + "/images/avatar" + value + ".png";
    };

    $scope.setAvatar = function(value) {
        configService.setAvatar(value);
        console.log("Just setted: ----------"+ value);
          console.log("New: ----------"+ JSON.stringify(configService.getUsers()));
    };

    $scope.close = function() {
        $mdDialog.hide();
    };
});
