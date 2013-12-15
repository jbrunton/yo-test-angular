'use strict';

// require('bower_componentangular/angular');

// Relative paths to include services.js and filters.js into your bundle
require('./components');

angular.module('yoTestAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'components'
]);

require('./config');
require('./controllers');
