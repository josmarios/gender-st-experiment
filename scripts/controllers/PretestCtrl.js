angular.module('tutor').controller("PretestCtrl", function($scope, $window, $location, configService, User) {

    var themes = ["default", "stFemale", "stMale"];

    var random = Math.floor((Math.random() * 10000)) % 3;

    $scope.questions = ["Sinto-me Calmo", "Sinto-me Seguro", "Estou tenso", "Estou arrependido", "Sinto-me à vontade", "Sinto-me perturbado", "Estou preocupado com possíveis infortúnios", "Sinto-me descansado", "Sinto-me ansioso", "Sinto-me 'em casa'", "Sinto-me confiante", "Sinto-me nervoso", "Sinto-me agitado", "Sinto-me em uma pilha de nervos", "Estou descontraído", "Sinto-me satisfeito", "Estou preocupado", "Sinto-me confuso", "Sinto-me alegre", "Sinto-me bem"];
    $scope.answers = [];

    $scope.setTime = function() {
        var time = new Date().getTime();
        User.setStartTime(time);
    };

    $scope.processAnswers = function() {

        //console.log($scope.answers);
        //  validation
        if ($scope.answers.length < 20) {
            $scope.msg = "Por favor, responda todas as perguntas!"
        } else {
            function add(a, b) {
                return parseInt(a) + parseInt(b);
            };

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

            console.log(ans);
            console.log("PRETEST: " + sum);

            configService.setTheme(themes[random]);
            User.setGender($scope.gender);
            User.setAge($scope.age);
            User.setTestType(themes[random]);
            User.setPretestPoints(sum);
            User.setPre(ans);

            console.log(User.getResponse());
            // User.save();
            $location.path("/home");

        };

    };
});
