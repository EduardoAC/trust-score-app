'use strict';

/**
 * @ngdoc function
 * @name trustScoreAppApp.controller:AddAccountCtrl
 * @description
 * # AboutCtrl
 * Controller of the trustScoreAppApp
 */
angular.module('trustScoreAppApp')
        .controller('AddAccountCtrl', function ($scope) {
            var container = document.getElementById("main-container");
            container.classList.add("new-account");
            container.querySelector("article").style.height = "100%";
            container.querySelector("article").style.position = "relative";
            $scope.events = {};
            $scope.events.addAccount = function () {
                $("#model-add-account").modal({
                    keyboard: false
                });
            };
            $scope.$on("$destroy", function () {
                container.classList.remove("new-account");
            });
        }).directive("mAddAccount", function () {

    return {
        restrict: 'E',
        scope: {
            postInfo: '='
        },
        templateUrl: 'templates/modal-add-account.html'
    };
});
