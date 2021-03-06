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
    $scope.voting = sync.$asObject();
    $scope.restaurants = $firebase(ref.child('restaurants')).$asArray();
    $scope.orders = $firebase(ref.child('orders')).$asArray();
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
      var downVoteIndex;
      if(restaurant.upVoters === undefined)  {
        restaurant.upVoteCount++;
        restaurant.upVoters = [];
        restaurant.upVoters.push({'name': $scope.username});
        if(restaurant.downVoters !== undefined) {
          downVoteIndex = restaurant.downVoters.getIndexBy('name', $scope.username);
        }
        if(downVoteIndex !== undefined) {
          restaurant.downVoters.splice(downVoteIndex);
        }
        $scope.restaurants.$save(restaurant);
      } else {
        var index = restaurant.upVoters.getIndexBy('name', $scope.username);
        if(index === undefined) {
          restaurant.upVoteCount++;
          restaurant.upVoters.push({'name': $scope.username});
          if(restaurant.downVoters !== undefined) {
            downVoteIndex = restaurant.downVoters.getIndexBy('name', $scope.username);
          }
          if(downVoteIndex !== undefined) {
            restaurant.downVoters.splice(downVoteIndex);
          }
          $scope.restaurants.$save(restaurant);
        }
      }
    };

    $scope.downVote = function(restaurant) {
      var upVoteIndex;
      if(restaurant.downVoters === undefined)  {
        restaurant.upVoteCount--;
        restaurant.downVoters = [];
        restaurant.downVoters.push({'name': $scope.username});
        if(restaurant.upVoters !== undefined) {
          upVoteIndex = restaurant.upVoters.getIndexBy('name', $scope.username);
        }
        if(upVoteIndex !== undefined) {
          restaurant.upVoters.splice(upVoteIndex);
        }
        $scope.restaurants.$save(restaurant);
      } else {
        var index = restaurant.downVoters.getIndexBy('name', $scope.username);
        if(index === undefined) {
          restaurant.upVoteCount--;
          restaurant.downVoters.push({'name': $scope.username});
          if(restaurant.upVoters !== undefined) {
            upVoteIndex = restaurant.upVoters.getIndexBy('name', $scope.username);
          }
          if(upVoteIndex !== undefined) {
            restaurant.upVoters.splice(upVoteIndex);
          }
          $scope.restaurants.$save(restaurant);
        }
      }
    };

    $scope.stopVoting = function() {
      if($scope.restaurants.length > 0) {
        $scope.voting.isVotingEnabled = false;
        $scope.voting.selectedRestaurant = _.max($scope.restaurants, function (restaurant) {
          return restaurant.upVoteCount;
        });
        $scope.voting.$save();
      }
    };

    $scope.submit = function() {
      $scope.editUsername = false;
      nameService.setName($scope.username);
    };

    $scope.cancel = function() {
      $scope.editUsername = false;
    };

    $scope.addPerson = function (order) {
      if(order.upVoters.getIndexBy('name', $scope.username) === undefined) {
        order.quantity++;
        order.upVoters.push({'name': $scope.username});
      } else {
        order.quantity++;
      }
      $scope.orders.$save(order);
    };
  });
