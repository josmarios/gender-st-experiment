angular.module('tutor').controller("PosttestCtrl", function($scope, $location, User) {

    $scope.questions = ["Sinto-me Calmo", "Sinto-me Seguro", "Estou tenso", "Estou arrependido", "Sinto-me à vontade", "Sinto-me perturbado", "Estou preocupado com possíveis infortúnios", "Sinto-me descansado", "Sinto-me ansioso", "Sinto-me 'em casa'", "Sinto-me confiante", "Sinto-me nervoso", "Sinto-me agitado", "Sinto-me em uma pilha de nervos", "Estou descontraído", "Sinto-me satisfeito", "Estou preocupado", "Sinto-me confuso", "Sinto-me alegre", "Sinto-me bem"];
    $scope.answers = [];

    $scope.processAnswers = function() {

        if ($scope.answers.length < 20) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {

            var time = new Date().getTime();

            var ans = $scope.answers;
            console.log(ans);

            //invert positive answers
            ans[0] = 5 - ans[0];
            ans[1] = 5 - ans[1];
            ans[4] = 5 - ans[4];
            ans[7] = 5 - ans[7];
            ans[9] = 5 - ans[9];
            ans[10] = 5 - ans[10];
            ans[14] = 5 - ans[14];
            ans[15] = 5 - ans[15];
            ans[18] = 5 - ans[18];
            ans[19] = 5 - ans[19];

            var sum = ans.reduce(add, 0);

            function add(a, b) {
                return parseInt(a) + parseInt(b);
            }

            User.setPosttestPoints(sum);
            User.setPost(ans);
            User.setEndTime(time);
            User.save();

            $location.path("/finish");

        };
    }

});
