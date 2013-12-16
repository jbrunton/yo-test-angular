'use strict';

var tabsModule = angular.module('tabs', []);
  
tabsModule.directive('tabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: function($scope, $element) {
      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      }

      this.addPane = function(pane) {
        if (panes.length == 0) $scope.select(pane);
        panes.push(pane);
      }
    },
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
