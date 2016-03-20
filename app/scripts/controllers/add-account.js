'use strict';

/**
 * @ngdoc function
 * @name trustScoreAppApp.controller:AddAccountCtrl
 * @description
 * # AboutCtrl
 * Controller of the trustScoreAppApp
 */
angular.module('trustScoreAppApp')
    .controller('AddAccountCtrl', function ($scope, $http, $timeout) {
        var container = document.getElementById("main-container");
        container.classList.add("new-account");
        container.querySelector("article").style.height = "100%";
        container.querySelector("article").style.position = "relative";
        $scope.events = {};
        //This get is use to lead the platform information that will be use in the modal popup
        $http.get('http://localhost:3030/platforms').success(function (platforms) {
            $scope.data = platforms;
        });
            $timeout(function () {
                $scope.data = ['A', 'B', 'C'];
            }, 500)
        $scope.events.addAccount = function () {
            $("#model-add-account").modal({
                keyboard: false
            });
        };
        $scope.$on("$destroy", function () {
            container.classList.remove("new-account");
        });
    })
    .directive('customDirective', function() {
        return {
            scope: {
                data: '=customDirective'
            },
            link: function (scope, elem, attrs) {

                scope.$watch('data', function (newVal, oldValue) {
                    console.log(newVal); // -- or console.log(scope.data)
                });
            }
        };
    })
    .directive("mAddAccount", function () {

        var linker = function ($scope, element) {
            $scope.$watch('platforms', function(newVal, oldValue) {
                $scope.platforms = newVal;
            });
        };
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            transclude: true,
            link: linker,
            templateUrl: 'templates/modal-add-account.html'
        };
});
