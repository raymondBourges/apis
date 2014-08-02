'use strict';

angular.module('app')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.token = jso_getToken("apis");

        jso_ensureTokens({"apis":    ["read"]})

        $http.get('http://localhost:8180/v1/api/course', {headers: {Authorization: "bearer " + $scope.token}}).
            success(function(data, status, headers, config) {
                $scope.courses = data;
                $scope.ret = "OK"
            }).
            error(function(data, status, headers, config) {
                $scope.ret = "NOK !"
            });
    });
