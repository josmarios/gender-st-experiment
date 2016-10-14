var tutorServices = angular.module("tutor.services", []);

tutorServices.service("configService", function() {

    var opts = ["default", "stFemale", "stMale"];

    var random = Math.floor((Math.random() * 10000)) % 3;
    // var currentTheme = opts[random];
    var currentTheme = "stFemale";

    var next = false;

    var badgeFlags = [false, false, false];

    var avatar = null;

    this.setTheme = function(value) {
        console.log("setting theme: " + value);
        currentTheme = value;
    };

    this.getTheme = function() {
        return currentTheme;
    };

    this.setNext = function(value) {
        next = value;
    };

    this.getNext = function() {
        return next;
    };

    this.addBadge = function(id) {
        badgeFlags[id] = true;
    };

    this.getBadges = function() {
        return badgeFlags;
    };

    this.setAvatar = function(value) {
        avatar = value;
    };

    this.getAvatar = function() {
        return avatar;
    };
});

tutorServices.service("User", function($http) {
    var response = {
        gender: "",
        age: "",
        testType: "",
        pretestPoints: 0,
        activityPoints: 0,
        posttestPoints: 0,
    };

    this.setGender = function(value) {
        response.gender = value;
        console.log("setting gender: " + value);
    };

    this.setAge = function(value) {
        response.age = value;
    };

    this.setTestType = function(value) {
        response.testType = value;
    };

    this.setPretestPoints = function(value) {
        response.pretestPoints = value;
    };

    this.setPosttestPoints = function(value) {
        response.posttestPoints = value;
    };

    this.setActivityPoints = function(value) {
        response.activityPoints = value;
    };

    this.getResponse = function() {
        return response;
    };

    this.save = function() {
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

        $http({
            url: "http://162.243.222.205:8282/back/CapstoneServlet",
            method: "POST",
            data: JSON.stringify(response)
        }).then(function(response) {
            // success
            console.log("Response sent!");

        }, function(response) {
            // failed
            console.error("Failed on submitting answer.");
        });
    };

});
