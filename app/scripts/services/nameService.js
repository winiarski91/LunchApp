'use strict';

angular.module('lunchApp')
.service( 'nameService', function (localStorageService) {
    this.getName = function() {
      return localStorageService.get('name');
    };

    this.setName = function(value) {
      localStorageService.set('name', value);
    };
  });
