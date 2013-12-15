'use strict';

// require('bower_componentangular/angular');

// Relative paths to include services.js and filters.js into your bundle
require('./components/fib');
require('./components/tabs');

angular.module('yoTestAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'components'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
      })
      .when('/tutorial', {
        templateUrl: 'views/tutorial.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

require('./controllers/welcome');
require('./controllers/about');
