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
  .module('lunchApp', ['ui.router', 'firebase', 'LocalStorageModule'])
  .constant('FirebaseRef','https://lunchwebapp.firebaseio.com/' )
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('Home');

    $stateProvider
      .state('Home', {
        url: '/Home',
        templateUrl: 'views/Restaurants.html',
        controller: 'RestaurantsCtrl'
      })
      .state('About', {
        url: '/About',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('AddRestaurant', {
        url: '/AddRestaurant/:username',
        templateUrl: 'views/AddRestaurant.html',
        controller: 'AddRestaurantCtrl'
      });
  });
