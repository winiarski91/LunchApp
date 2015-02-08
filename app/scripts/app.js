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
  .constant('FirebaseRef','https://lunchwebapp.firebaseio.com/' + moment().format('YYYY-MM-DD') )
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
      .state('AddMeal', {
        url: '/AddMeal/',
        templateUrl: 'views/AddMeal.html',
        controller: 'AddMealCtrl'
      })
      .state('AddRestaurant', {
        url: '/AddRestaurant/',
        templateUrl: 'views/AddRestaurant.html',
        controller: 'AddRestaurantCtrl'
      });
  });
