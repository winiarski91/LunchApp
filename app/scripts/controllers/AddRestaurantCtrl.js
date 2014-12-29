'use strict';

angular.module('lunchApp')
  .controller('AddRestaurantCtrl', function ($scope, $state, $stateParams, $firebase, FirebaseRef) {
    if($stateParams.username === undefined) {
      $state.go('Home');
    }
    var ref = new Firebase(FirebaseRef);
    $scope.username = $stateParams.username;

    $scope.addRestaurant = function() {
      if($scope.description === undefined) {
        $scope.description = '';
      }
      ref.push({ 'name': $scope.name, 'menuLink': $scope.menuLink, 'addedBy': $scope.username, 'upVoteCount': 1, 'description': $scope.description,
      'voters': [{name: $scope.username}]});
      $state.go('Home');
    };
  });
