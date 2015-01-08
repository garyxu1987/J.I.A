'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function($scope, Global) {
    $scope.global = Global;

    var init=function(needSkrollr){
      require(['system/assets/js/skrollr.min'], function(skrollr){
        if(skrollr.get()){
          if(needSkrollr){
            skrollr.get().refresh();
          }else{
             skrollr.get().destroy();
          }
        }else if(needSkrollr){
          skrollr.init({
            edgeStrategy: 'set',
            easing: {
              WTF: Math.random,
              inverted: function(p) {
                return 1-p;
              }
            }
          });
        }

      });
    }

    window.onhashchange = function () {
      $('body').css({height:'100%'}); 
      if(window.location.hash=='#!/'){
        init(true);
      }else{
        init(false);
      }
    }
    init(true);
  }
]);
