'use strict';

/**
 * @ngdoc function
 * @name trustScoreAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trustScoreAppApp
 */
angular.module('trustScoreAppApp')
.factory('auth', ['$http', '$window', function($http, $window){
  var auth = {};
  auth.saveToken = function(token) {
    $window.localStorage['trust-score-token'] = token;
  };
  auth.getToken = function() {
    return $window.localStorage['trust-score-token'];
  };
  auth.isLoggedIn = function() {
    var token = auth.getToken();

    if(token) {
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };
  auth.currentUser = function(){
    if(auth.isLoggedIn()) {
      var token = auth.getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload.username;
    }
  };
  auth.register = function(user) {
    return $http.post('http://localhost:9000/register', user).success(function(data){
      auth.saveToken(data.token);
    });
  };
  auth.logIn = function(user) {
    return $http.post('/login', user).success(function(data){
      auth.saveToken(data.token);
    });
  };
  auth.logOut = function() {
    $window.localStorage.removeItem('trust-score-token');
  };
  return auth;
}])
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
}).
controller('AuthCtrl', [
'$scope',
'$location',
'auth',
function($scope, $location, auth){
  $scope.user = {};
  $scope.register = function(){
    console.log("trying to register");
    auth.register($scope.user).error(function(error){
      $scope.error = error;
    }).then(function(){
      $location.path('/');
    });
  };
  $scope.logIn = function() {
    console.log("trying to login");
    auth.logIn($scope.user).error(function(error){
      $scope.error = error;
    }).then(function(){
      $location.path('/');
    });
  };
}]);

