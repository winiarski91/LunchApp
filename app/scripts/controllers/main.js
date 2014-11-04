'use strict';

/**
 * @ngdoc function
 * @name lunchAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lunchAppApp
 */
angular.module('lunchAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
