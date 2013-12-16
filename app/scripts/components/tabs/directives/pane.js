'use strict';

var tabsModule = angular.module('components.tabs');

tabsModule.directive('pane', function() {
  return {
    require: '^tabs',
    restrict: 'E',
    transclude: true,
    scope: { title: '@' },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    template:
      '<div class="content" ng-class="{active: selected}" ng-transclude>' +
      '</div>',
    replace: true
  };
});