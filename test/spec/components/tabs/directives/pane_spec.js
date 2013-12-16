'use strict';

// content is based on https://github.com/vojtajina/ng-directive-testing/blob/master/test/tabsSpec.js

(function() {
  describe ('Directive: tabs', function() {

    beforeEach(module('components.tabs'));

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
      
      titles = elm.find('dl.tabs dd a');
      contents = elm.find('div.tabs-content div.content');
    }));

    it ('should create content for the tabs', function() {
      expect(contents.length).toBe(2);
      expect(contents.eq(0).text()).toBe('Tab One Content');
      expect(contents.eq(1).text()).toBe('Tab Two Content');
    });
    
    it ('should make the first content div active by default', function() {
      expect(contents.eq(0)).toHaveClass('active');
      expect(contents.eq(1)).not.toHaveClass('active');
    });
    
    it ('should change the active pane when the title is clicked', function() {
      titles.eq(1).click();

      expect(contents.eq(0)).not.toHaveClass('active');
      expect(contents.eq(1)).toHaveClass('active');
    });
  });
})();
