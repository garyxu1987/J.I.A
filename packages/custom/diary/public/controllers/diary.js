'use strict';

angular.module('mean.diary').controller('DiaryController', ['$scope', 'Global', 'Diary',
  function($scope, Global, Diary) {
    $scope.global = Global;
    $scope.package = {
      name: 'diary'
    };
    
    require(['diary/assets/js/turn'],function(){
        $("#flipbook").turn({
			autoCenter: true
		});
    });
  }
]);
