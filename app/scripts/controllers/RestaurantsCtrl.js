'use strict';

/**
 * @ngdoc function
 * @name lunchAppApp.controller:RestaurantsCtrl
 * @description
 * # RestaurantsCtrl
 * Controller of the lunchApp
 */
angular.module('lunchApp')
  .controller('RestaurantsCtrl', function ($scope) {
    $scope.restaurants = [
      {
        name: 'Etnika',
        description: 'Codziennie przerzucamy pomost pomiędzy tym, co znane i tradycyjne w naszej rodzimej kuchni, a egzotyką i różnorodnością specjałów z całego świata. Wyszukane połączenia smaków podawane w prosty sposób to nasz niezawodny przepis na Twoją satysfakcję, pełny brzuch i świetne samopoczucie!',
        upVoteCount: 0
      },
      {
        name: 'Emes',
        description: 'Jeśli dopadł Cię głód lub masz ochotę zjeść coś smacznego, to z wielką przyjemnością zapraszamy Cię do Cafe eMeS Kraków mieszczącej się przy ulicy Rakowickiej 19 w Krakowie. Każdy znajdzie coś dla siebie - pizza, makarony, ryby, sałatki i inne smakowite dania czekają.',
        upVoteCount: 0
      },
      {
        name: 'Fabryka Pizzy',
        description: 'Kultowa Fabryka Pizzy z tradycjami. Od 2000r, z każdym rokiem smakujemy jeszcze lepiej. I chcemy się tym smakiem dzielić z Wami.',
        upVoteCount: 0
      },
      {
        name: 'Moa Burger',
        description: 'MoaBurger to rodzinna firma, która powstała z pasji do dobrego jedzenia.',
        upVoteCount: 0
      }
    ];

    $scope.upVote = function(restaurant) {
      restaurant.upVoteCount++;
    };

    $scope.downVote = function(restaurant) {
      restaurant.upVoteCount--;
    };
  });
