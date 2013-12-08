"use strict";angular.module("yoTestAngularApp",["ngCookies","ngResource","ngSanitize","ngRoute","components"]).config(function($routeProvider){$routeProvider.when("/",{templateUrl:"views/welcome.html",controller:"WelcomeController"}).when("/tutorial",{templateUrl:"views/tutorial.html"}).when("/about",{templateUrl:"views/about.html"}).otherwise({redirectTo:"/"})}),angular.module("components",[]).directive("tabs",function(){return{restrict:"E",transclude:!0,scope:{},controller:function($scope){var panes=$scope.panes=[];$scope.select=function(pane){angular.forEach(panes,function(pane){pane.selected=!1}),pane.selected=!0},this.addPane=function(pane){0==panes.length&&$scope.select(pane),panes.push(pane)}},template:'<div><dl class="tabs"><dd ng-repeat="pane in panes" ng-class="{active:pane.selected}"><a href="" ng-click="select(pane)">{{pane.title}}</a></dd></dl><div class="tabs-content" ng-transclude></div></div>',replace:!0}}).directive("pane",function(){return{require:"^tabs",restrict:"E",transclude:!0,scope:{title:"@"},link:function(scope,element,attrs,tabsCtrl){tabsCtrl.addPane(scope)},template:'<div class="content" ng-class="{active: selected}" ng-transclude></div>',replace:!0}}),angular.module("yoTestAngularApp").controller("WelcomeController",function($scope){$scope.yourName="World"});