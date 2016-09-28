angular.module('capstone').controller("IndexCtrl", function($scope, $window) {

    $scope.userid = Math.floor((Math.random() * 10000));

    $scope.questions = ["Sinto-me Calmo", "Sinto-me Seguro", "Estou tenso", "Estou arrependido", "Sinto-me à vontade", "Sinto-me perturbado", "Estou preocupado com possíveis infortúnios", "Sinto-me descansado", "Sinto-me ansioso", "Sinto-me 'em casa'", "Sinto-me confiante", "Sinto-me nervoso", "Sinto-me agitado", "Sinto-me em uma pilha de nervos", "Estou descontraído", "Sinto-me satisfeito", "Estou preocupado", "Sinto-me confuso", "Sinto-me alegre", "Sinto-me bem"];
    $scope.answers = [];

    $scope.processAnswers = function() {

        if ($scope.answers.length < 20) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {
             function add(a, b) {
                return parseInt(a) + parseInt(b);
            }

            var sum = $scope.answers.reduce(add, 0);
          

            console.log(sum);
            $window.location.href = "views/tutor.html";


        };
    }

});
