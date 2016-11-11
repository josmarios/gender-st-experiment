var tutorServices = angular.module("tutor.services", []);

tutorServices.service("configService", function() {

    var opts = ["default", "stMale", "stFemale"];

    var random = Math.floor((Math.random() * 123457)) % 3;
    var currentTheme = opts[random];
    // var currentTheme = "default";

    var next = false;

    var badgeFlags = [false, false, false];

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

});

tutorServices.service("User", function($http) {
    var resp = {
        startTime: 0,
        endTime: 0,
        gender: "",
        age: "",
        testType: "",
        pretestPoints: 0,
        activityPoints: 0,
        posttestPoints: 0,
        pre: [],
        post: []
    };

    this.setGender = function(value) {
        resp.gender = value;
        console.log("setting gender: " + value);
    };

    this.setAge = function(value) {
        resp.age = value;
    };

    this.setTestType = function(value) {
        resp.testType = value;
    };

    this.setPretestPoints = function(value) {
        resp.pretestPoints = value;
    };

    this.setPosttestPoints = function(value) {
        resp.posttestPoints = value;
    };

    this.setActivityPoints = function(value) {
        resp.activityPoints = value;
    };

    this.getResponse = function() {
        return resp;
    };

    this.getAnxiety = function() {
        return resp.pretestPoints;
    };

    this.setPre = function(value) {
        resp.pre = value;
    };

    this.setPost = function(value) {
        resp.post = value;
    };

    this.setStartTime = function(value) {
        resp.startTime = value;
    };

    this.setEndTime = function(value) {
        resp.endTime = value;
    };

    this.save = function() {
        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

        $http({
            url: "http://162.243.222.205:8282/back/CapstoneServlet",
            method: "POST",
            data: JSON.stringify(resp)
        }).then(function(response) {
            // success
            console.log("response sent!");

        }, function(response) {
            // failed
            console.error("Failed on submitting answer. " + response);
        });
    };

});
