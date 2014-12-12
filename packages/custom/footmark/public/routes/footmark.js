'use strict';

angular.module('mean.footmark').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('Footmark', {
      url: '/footmark/example',
      templateUrl: 'footmark/views/index.html'
    });
  }
]);
