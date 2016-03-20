'use strict';

/**
 * @ngdoc function
 * @name trustScoreAppApp.controller:AddAccountCtrl
 * @description
 * # AboutCtrl
 * Controller of the trustScoreAppApp
 */
angular.module('trustScoreAppApp')
        .controller('AddAccountCtrl', function ($scope, $http) {
            var container = document.getElementById("main-container");
            container.classList.add("new-account");
            container.querySelector("article").style.height = "100%";
            container.querySelector("article").style.position = "relative";
            $scope.events = {};
            var platforms = [{
                    id: 1,
                    name: "amazon"
                },
                {
                    id: 2,
                    name: "ebay"
                }
            ];
            //This get is use to lead the platform information that will be use in the modal popup
            $http.get('http://localhost:3030/platforms').then(function(platforms){
                $scope.platforms = platforms;
            });
            
            $scope.events.addAccount = function () {
                $("#model-add-account").modal({
                    keyboard: false
                });
            };
            $scope.$on("$destroy", function () {
                container.classList.remove("new-account");
            });
        }).directive("mAddAccount", function () {

    var linker = function ($scope, element) {
        $scope.platforms = $scope.$parent.platforms;
    };
    return {
        restrict: 'E',
        scope: {
            postInfo: '='
        },
        link: linker,
        templateUrl: 'templates/modal-add-account.html'
    };
});
