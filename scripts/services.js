angular.module('tutor.services', []).service("tutorServices", function() {

    var currentTheme = "stMale";

    this.nextOn = false;

    this.setTheme = function(value) {
        currentTheme = value;
    };

    this.getTheme = function() {
        return currentTheme;
    };
});
