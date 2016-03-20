'use strict';

/**
 * @ngdoc function
 * @name trustScoreAppApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the trustScoreAppApp
 */
angular.module('trustScoreAppApp')
.controller('RegisterCtrl', ['$scope', function ($scope) {
    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };
}]);
