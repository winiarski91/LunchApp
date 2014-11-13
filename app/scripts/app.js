'use strict';

/**
 * @ngdoc overview
 * @name lunchAppApp
 * @description
 * # lunchAppApp
 *
 * Main module of the application.
 */
angular
  .module('lunchApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/Restaurants.html',
        controller: 'RestaurantsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
