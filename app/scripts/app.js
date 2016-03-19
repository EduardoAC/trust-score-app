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
      .otherwise({
        redirectTo: '/'
      });
  });
