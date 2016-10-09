var tutorServices = angular.module("tutor.services", []);

tutorServices.service("configService", function($rootScope) {

    var currentTheme = "default";
    var next = false;

    this.setTheme = function(value) {
        console.log("setting theme: " + value);
        currentTheme = value;
    };

    this.getTheme = function() {
        return currentTheme;
    };

    this.setNext = function(value) {
        next = value;
    }

    this.getNext = function() {
        return next;
    }

    // return {
    //     setTheme: setTheme,
    //     getTheme: getTheme,
    //     setNext: setNext,
    //     getNext: getNext
    // };
});

tutorServices.service("User", function() {
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
    }

    // return {
    //     setGender: setGender,
    //     setAge: setAge,
    //     setTestType: setTestType,
    //     setPretestPoints: setPretestPoints,
    //     setPosttestPoints: setPosttestPoints,
    //     setActivityPoints: setActivityPoints,
    //     getResponse: getResponse
    // };

});
