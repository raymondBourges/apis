'use strict';

var jso = new JSO({
    providerID: "apis",
    client_id: "test-angular",
    redirect_uri: "http://localhost:8888",
//    default_lifetime
    authorization: "http://localhost:8080/oauth2/authorize",
    scopes: { request: ["read"]},
    debug: true
});


var callback = function(token)  {
    console.log("CBCBCBCBCBCBCBCBCBCBCBCBCB", token)
};

jso.callback(null, callback, "apis");


angular.module('app', [
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

