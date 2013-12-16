'use strict';

// content is based on https://github.com/vojtajina/ng-directive-testing/blob/master/test/tabsSpec.js

(function() {
  describe ('components.tabs.TabsController', function() {
    var $scope, controller;
    
    beforeEach(module('components.tabs'));

    beforeEach(inject(function($controller, $rootScope) {
      $scope = $rootScope.$new();
      controller = $controller('TabsController', { $scope: $scope });
    }));
    
    describe ('#select', function() {
      it ('should mark the given pane as selected', function() {
        var pane = {};
        controller.addPane(pane);

        $scope.select(pane);

        expect(pane.selected).toBe(true);
      });
      
      it ('should deselect the other panes', function() {
        var pane1 = { selected: true }, pane2 = {};
        controller.addPane(pane1);
        controller.addPane(pane2);
        
        $scope.select(pane2);
        
        expect(pane1.selected).toBe(false);
        expect(pane2.selected).toBe(true);
      });
    });
    
    describe ('#addPane', function() {
      var pane1, pane2;
      
      beforeEach(function() {
        pane1 = {};
        pane2 = {};
      });
      
      it ('appends the given pane to the scope', function() {
        expect($scope.panes).toEqual([]);
        
        controller.addPane(pane1);
        expect($scope.panes).toEqual([pane1]);
        
        controller.addPane(pane2);
        expect($scope.panes).toEqual([pane1, pane2]);
      });
      
      it ('selects the first pane', function() {
        controller.addPane(pane1);
        controller.addPane(pane2);
        expect(pane1.selected).toBeTruthy();
        expect(pane2.selected).toBeFalsy();
      });
    });
  });
})();
