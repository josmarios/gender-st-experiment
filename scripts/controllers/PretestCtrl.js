angular.module('tutor').controller("PretestCtrl", function($scope, $window, $location, configService, User) {

    var themes = ["default", "stFemale", "stMale"];

    var random = Math.floor((Math.random() * 10000)) % 3;

    $scope.questions = ["Sinto-me Calmo", "Sinto-me Seguro", "Estou tenso", "Estou arrependido", "Sinto-me à vontade", "Sinto-me perturbado", "Estou preocupado com possíveis infortúnios", "Sinto-me descansado", "Sinto-me ansioso", "Sinto-me 'em casa'", "Sinto-me confiante", "Sinto-me nervoso", "Sinto-me agitado", "Sinto-me em uma pilha de nervos", "Estou descontraído", "Sinto-me satisfeito", "Estou preocupado", "Sinto-me confuso", "Sinto-me alegre", "Sinto-me bem"];
    $scope.answers = [];

    $scope.processAnswers = function() {

        //  validation
        if ($scope.answers.length < 20) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {
            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }

            var sum = $scope.answers.reduce(add, 0);

            configService.setTheme(themes[random]);
            User.setGender($scope.gender);
            User.setAge($scope.age);
            User.setTestType(themes[random]);

            User.setPretestPoints(sum);

            console.log(User.getResponse());
            // User.save();
            $location.path("/home");

        };

    };
});
