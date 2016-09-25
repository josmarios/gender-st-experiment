angular.module('tutor').controller("PosttestCtrl", function($scope, $window) {

    console.log("PosttestCtrl ok");

    $scope.questions = ["Sinto-me Calmo", "Sinto-me Seguro", "Estou tenso", "Estou arrependido", "Sinto-me à vontade", "Sinto-me perturbado", "Estou preocupado com possíveis infortúnios", "Sinto-me descansado", "Sinto-me ansioso", "Sinto-me 'em casa'", "Sinto-me confiante", "Sinto-me nervoso", "Sinto-me agitado", "Sinto-me em uma pilha de nervos", "Estou descontraído", "Sinto-me satisfeito", "Estou preocupado", "Sinto-me confuso", "Sinto-me alegre", "Sinto-me bem"];
    $scope.answers = [];

    $scope.processAnswers = function() {

        if ($scope.answers.length < 20) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {
            var sum = $scope.answers.reduce(add, 0);

            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }

            console.log(sum);
            //$window.location.href = "views/tutor.html";

        };
    }

});
