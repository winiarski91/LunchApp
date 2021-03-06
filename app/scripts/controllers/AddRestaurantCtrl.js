'use strict';

angular.module('lunchApp')
  .controller('AddRestaurantCtrl', function ($scope, $state, $stateParams, $firebase, FirebaseRef, nameService) {
    if(nameService.getName() === undefined || nameService.getName() === null) {
      $state.go('Home');
    }
    var ref = new Firebase(FirebaseRef);
    $scope.username = nameService.getName();

    $scope.addRestaurant = function() {
      if($scope.description === undefined) {
        $scope.description = '';
      }
      ref.child('restaurants').push({ 'name': $scope.name, 'menuLink': $scope.menuLink, 'addedBy': $scope.username, 'upVoteCount': 1, 'description': $scope.description,
      'upVoters': [{name: $scope.username}], 'downVoters': [{}]});
      $state.go('Home');
    };
  });
