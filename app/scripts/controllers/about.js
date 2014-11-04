'use strict';

/**
 * @ngdoc function
 * @name lunchAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lunchAppApp
 */
angular.module('lunchAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
