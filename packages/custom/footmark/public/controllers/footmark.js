'use strict';

angular.module('mean.footmark').controller('FootmarkController', ['$scope', 'Global', 'Footmark',
  function($scope, Global, Footmark) {
    $scope.global = Global;
    $scope.package = {
      name: 'footmark'
    };
    /*var timeline_config = {
            width:              '100%',
            height:             '600',
            source:             'path_to_json/or_link_to_googlespreadsheet',
            embed_id:           'timeline-embed',  
            start_at_end:       false,             
            start_at_slide:     '4',               
            start_zoom_adjust:  '3',               
            hash_bookmark:      true,              
            font:               'Bevan-PotanoSans',
            debug:              true,              
            lang:               'fr',              
            maptype:            'watercolor',      
            css:                'bower_components/TimelineJS/build/css/timeline.css', 
            js:                 'bower_components/TimelineJS/build/js/timeline-min.js'
        };*/
    
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
