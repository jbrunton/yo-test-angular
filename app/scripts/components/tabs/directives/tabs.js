'use strict';

var tabsModule = angular.module('components.tabs');

tabsModule.directive('tabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: 'TabsController',
    template:
    '<div>' +
      '<dl class="tabs">' +
        '<dd ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
          '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
        '</dd>' +
      '</dl>' +
      '<div class="tabs-content" ng-transclude></div>' +
    '</div>',
    replace: true
  };
});
