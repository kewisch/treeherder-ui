"use strict";

treeherder.controller('MainCtrl',
    function MainController($scope, $rootScope) {
        $scope.query="";
        $scope.statusError = function(msg) {
            $rootScope.statusMsg = msg;
            $rootScope.statusColor = "red";
        };
        $scope.statusSuccess = function(msg) {
            $rootScope.statusMsg = msg;
            $rootScope.statusColor = "green";
        };
    }
);


treeherder.controller('RepoDropDownCtrl',
    function RepoDropDownCtrl($scope, $http, $location, thRepos) {
        $scope.changeRepo = function(repo) {
            $location.search({repo: repo});
        };
        thRepos.getRepos($scope);
    }
);
