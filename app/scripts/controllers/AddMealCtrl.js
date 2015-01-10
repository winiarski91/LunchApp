'use strict';

angular.module('lunchApp')
  .controller('AddMealCtrl', function ($scope, $state, $stateParams, $firebase, FirebaseRef) {
    if($stateParams.username === undefined) {
      $state.go('Home');
    }
    var ref = new Firebase(FirebaseRef);
    $scope.username = $stateParams.username;

    $scope.addMeal = function() {
      if($scope.description === undefined) {
        $scope.description = '';
      }
      ref.child('orders').push({ 'name': $scope.name, 'people': [{name: $scope.username}]});
      $state.go('Home');
    };
  });
