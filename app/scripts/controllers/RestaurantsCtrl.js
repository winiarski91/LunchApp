'use strict';

/**
 * @ngdoc function
 * @name lunchAppApp.controller:RestaurantsCtrl
 * @description
 * # RestaurantsCtrl
 * Controller of the lunchApp
 */
angular.module('lunchApp')
  .controller('RestaurantsCtrl', function ($scope, $firebase, nameService, FirebaseRef) {
    var ref = new Firebase(FirebaseRef);
    var sync = $firebase(ref);
    $scope.restaurants = sync.$asArray();
    $scope.editUsername = false;

    $scope.hideForm = function() {
      var username = nameService.getName();
      if($scope.editUsername !== true && username !== null) {
        $scope.username = username;
        return true;
      }
      return false;
    };

    $scope.upVote = function(restaurant) {
      restaurant.upVoteCount++;
      $scope.restaurants.$save(restaurant);
    };

    $scope.downVote = function(restaurant) {
      restaurant.upVoteCount--;
      $scope.restaurants.$save(restaurant);
    };

    $scope.submit = function() {
      $scope.editUsername = false;
      nameService.setName($scope.username);
    };

    $scope.cancel = function() {
      $scope.editUsername = false;
    };


  });
