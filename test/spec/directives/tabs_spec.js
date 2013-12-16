'use strict';

// content is based on https://github.com/vojtajina/ng-directive-testing/blob/master/test/tabsSpec.js

(function() {
  describe ('Directive: tabs', function() {

    beforeEach(module('directives.tabs'));

    var elm, scope, tabs, titles, contents;
    beforeEach(inject(function($rootScope, $compile) {
      // we might move this tpl into an html file as well...
      elm = angular.element(
        '<div>' +
          '<tabs>' +
            '<pane title="Tab One">' +
              'Tab One Content' +
            '</pane>' +
            '<pane title="Tab Two">' +
              'Tab Two Content' +
            '</pane>' +
          '</tabs>' +
        '</div>');

      // TODO: is it safe to use $rootScope, or would $rootScope.$new() be preferable?
      scope = $rootScope;
      $compile(elm)(scope);
      scope.$digest();
      
      tabs = elm.find('dl.tabs dd');
      titles = elm.find('dl.tabs dd a');
      contents = elm.find('div.tabs-content div.content');
    }));
    
    beforeEach(function() {
      this.addMatchers({
        toHaveClass: function(cls) {
          this.message = function() {
            return "Expected '" + angular.mock.dump(this.actual) + "' to have class '" + cls + "'.";
          };

          return this.actual.hasClass(cls);
        }
      });
    });

    it ('should create titles for the tabs', function() {
      expect(titles.length).toBe(2);
      expect(titles.eq(0).text()).toBe('Tab One');
      expect(titles.eq(1).text()).toBe('Tab Two');
    });
    
    it ('should create content for the tabs', function() {
      expect(contents.length).toBe(2);
      expect(contents.eq(0).text()).toBe('Tab One Content');
      expect(contents.eq(1).text()).toBe('Tab Two Content');
    });
    
    it ('should make the first tab active by default', function() {
      expect(tabs.eq(0)).toHaveClass('active');
      expect(tabs.eq(1)).not.toHaveClass('active');
    });
    
    it ('should make the first content div active by default', function() {
      expect(contents.eq(0)).toHaveClass('active');
      expect(contents.eq(1)).not.toHaveClass('active');
    });
    
    it ('should change the active pane when the title is clicked', function() {
      titles.eq(1).click();
      
      expect(tabs.eq(0)).not.toHaveClass('active');
      expect(tabs.eq(1)).toHaveClass('active');
      
      expect(contents.eq(0)).not.toHaveClass('active');
      expect(contents.eq(1)).toHaveClass('active');
    });
  });
  
  describe ('TabsController', function() {
    var $scope, controller;
    
    beforeEach(module('directives.tabs'));

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
