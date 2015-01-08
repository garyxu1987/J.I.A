'use strict';

angular.module('mean.footmark').controller('FootmarkController', ['$scope', 'Global', 'Footmark',
  function($scope, Global, Footmark) {
    $scope.global = Global;
    $scope.package = {
      name: 'footmark'
    };
    
    require(['footmark/assets/js/storyjs-embed'],function(){
        createStoryJS({
            hash_bookmark:      false,
            width:              '100%',
            height:             '600',
            source:             'footmark/example/test',
            embed_id:           'my-timeline', 
            start_at_end:       false,         
            maptype:            'watercolor',    
            css:                'footmark/assets/css/timeline.css', 
            js:                 'footmark/assets/js/timeline.js'
        });
    });
  }
]);
