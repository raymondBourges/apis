'use strict';

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

jso_configure({
        "apis": {
            client_id: "test-angular",
            redirect_uri: "http://localhost:8888/",
            authorization: "http://localhost:8080/oauth2/authorize",
            debug: true
        }
    },
    {debug: true});
