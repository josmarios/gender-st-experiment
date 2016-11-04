angular.module('tutor').controller("FinishCtrl", function($scope) {

    window.fbAsyncInit = function() {
        FB.init({
            appId: '259201801144935',
            xfbml: true,
            version: 'v2.8'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    document.getElementById('shareBtn').onclick = function() {
        FB.ui({
            method: 'share',
            display: 'popup',
            href: 'http://ansiedade.tk/',
            title: 'Estudo sobre Ansiedade',
            description: 'Estudo sobre ansiedade em ambientes educacionais gamificados',
            picture: 'http://portaldobem.net/wp-content/uploads/2015/10/ansiedade.jpg',
            layout: 'button'
        }, function(response) {});
    }
});
