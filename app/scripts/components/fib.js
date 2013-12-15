'use strict';

angular.module('components', [])
  
  .filter('fib', function() {
    return function(n){
      if (n == 0) {
        return 0;
      } else if (n == 1) {
        return 1;
      } else {
        var a = 0, b = 1;
        while (--n > 1) {
          var t = a + b;
          a = b;
          b = t;
        }
        return t;
      }
    }
  });