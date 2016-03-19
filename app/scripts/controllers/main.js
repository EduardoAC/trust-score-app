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
        if(parent.className.indexOf("fullscreen") > -1){
            parent.classList.remove("fullscreen");
            document.getElementById("score-details").classList.remove("hidden");

            $scope.sharePlatformScoreList =[
                {
                    name: "Amazon",
                    buying_percent: 65,
                    selling_percent: 35,
                    total_score: 10,
                    max_score: 10,
                    positive_reviews: 1050,
                    negative_reviews: 2
                },
                {
                    name: "Ebay",
                    buying_percent: 100,
                    selling_percent: 0,
                    total_score: 4,
                    max_score: 10,
                    positive_reviews: 50,
                    negative_reviews: 20
                }
            ];
        }else{
            parent.classList.add("fullscreen");
            document.getElementById("score-details").classList.add("hidden");
        }
    };
}).directive('spScore',function(){
    var linker = function ($scope, element) {
        $scope.scoreInfo = $scope.$parent.scoreInfo;
    };

    return {
        restrict: 'E',
        scope: {
            postInfo: '='
        },
        link: linker,
        templateUrl: 'templates/share-platform-score.html'
    };
});
