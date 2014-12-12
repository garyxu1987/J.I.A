'use strict';

angular.module('mean.footmark').controller('FootmarkController', ['$scope', 'Global', 'Footmark',
  function($scope, Global, Footmark) {
    $scope.global = Global;
    $scope.package = {
      name: 'footmark'
    };
  }
]);
