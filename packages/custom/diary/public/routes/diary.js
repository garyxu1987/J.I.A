'use strict';

angular.module('mean.diary').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('Diary', {
      url: '/diary/',
      templateUrl: 'diary/views/index.html'
    });
  }
]);
