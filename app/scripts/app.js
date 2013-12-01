'use strict';

angular.module('yoTestAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
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
