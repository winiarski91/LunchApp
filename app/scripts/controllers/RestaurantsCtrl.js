'use strict';

/**
 * @ngdoc function
 * @name lunchAppApp.controller:RestaurantsCtrl
 * @description
 * # RestaurantsCtrl
 * Controller of the lunchApp
 */
angular.module('lunchApp')
  .controller('RestaurantsCtrl', function ($scope, $firebase) {
    var ref = new Firebase('https://lunchwebapp.firebaseio.com/restaurants');
    var sync = $firebase(ref);
    $scope.restaurants = sync.$asArray();

    $scope.upVote = function(restaurant) {
      restaurant.upVoteCount++;
      $scope.restaurants.$save(restaurant);
    };

    $scope.downVote = function(restaurant) {
      restaurant.upVoteCount--;
      $scope.restaurants.$save(restaurant);
    };
  });
