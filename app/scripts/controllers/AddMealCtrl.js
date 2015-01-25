'use strict';

angular.module('lunchApp')
  .controller('AddMealCtrl', function ($scope, $state, $stateParams, $firebase, FirebaseRef, nameService) {
    if(nameService.getName() === undefined || nameService.getName() === null) {
      $state.go('Home');
    }
    var ref = new Firebase(FirebaseRef);
    $scope.username = nameService.getName();

    $scope.addMeal = function() {
      if($scope.description === undefined) {
        $scope.description = '';
      }
      ref.child('orders').push({ 'name': $scope.name, 'people': [{name: $scope.username}], 'quantity': $scope.quantity});
      $state.go('Home');
    };
  });
