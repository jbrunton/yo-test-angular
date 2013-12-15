/*global describe, it */
'use strict';
(function () {
  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        expect(true).toBe(true);
      });
    });
  });
  
  describe('Filter: fib', function () {

	  // load the filter's module
	  beforeEach(module('components'));

	  // instantiate filter
	  var fib;
	  beforeEach(inject(function($filter) {
	    fib = $filter('fib');
	  }));

	  it('should return fib(0)', function () {
	    expect(fib(0)).toBe(0);
	  });

	  it('should return fib(1)', function () {
	    expect(fib(1)).toBe(1);
	  });

	  it('should return fib(k) for k > 1', function () {
	    expect(fib(5)).toBe(3);
	  });
	});
})();
