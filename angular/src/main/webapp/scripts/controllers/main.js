'use strict';

angular.module('app')
    .controller('MainCtrl', function ($scope, $http) {

        jso.getToken(function(token) {

            $scope.token = token;

            $http.get('http://localhost:8180/v1/api/course', {headers: {Authorization: "bearer " + token.access_token}}).
                success(function(data, status, headers, config) {
                    $scope.courses = data;
                    $scope.ret = "OK"
                }).
                error(function(data, status, headers, config) {
                    $scope.ret = "NOK !"
                });
        });


    });
