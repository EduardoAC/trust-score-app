'use strict';

/**
 * @ngdoc function
 * @name trustScoreAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trustScoreAppApp
 */
angular.module('trustScoreAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.events = {};
    $scope.events.moreDetails = function(event){
        var parent = event.currentTarget.parentNode.parentNode;
        parent.classList.remove("fullscreen");
        document.getElementById("score-details").classList.remove("hidden");
        
    };
});
