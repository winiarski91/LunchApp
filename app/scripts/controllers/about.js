'use strict';

/**
 * @ngdoc function
 * @name lunchAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lunchApp
 */
angular.module('lunchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
