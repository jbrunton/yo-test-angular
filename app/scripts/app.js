'use strict';

// require('bower_componentangular/angular');

// Relative paths to include services.js and filters.js into your bundle
require('./components');
require('./directives');

angular.module('yoTestAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'components',
  'directives'
]);

require('./config');
require('./controllers');
