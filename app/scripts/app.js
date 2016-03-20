'use strict';

/**
 * @ngdoc overview
 * @name trustScoreAppApp
 * @description
 * # trustScoreAppApp
 *
 * Main module of the application.
 */
angular
  .module('trustScoreAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/add-account', {
        templateUrl: 'views/add-account.html',
        controller: 'AddAccountCtrl',
        controllerAs: 'addAccount'
      })
      .when('/login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        controllerAs: 'AuthCtrl',
        onEnter: ['$location', 'auth', function($location, auth){
          if(auth.isLoggedIn()){
            $location.path('/');
          }
        }]
      })
      .when('/register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        controllerAs: 'AuthCtrl',
        onEnter: ['$location', 'auth', function($location, auth){
          if(auth.isLoggedIn()){
            $location.path('/');
          }
        }]
      })
      .otherwise({
        redirectTo: '/'
      });
  });
