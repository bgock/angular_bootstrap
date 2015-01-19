'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view2'});
}]);
app.directive('resize', function ($window) {
  return function (scope, element) {
    var w = angular.element($window);
    scope.$watch(function () {
      return { 'h': $window.innerHeight, 'w': $window.innerWidth };
    }, function (newValue, oldValue) {
      scope.windowHeight = newValue.h-76+'px';
      scope.windowWidth = newValue.w+'px';

      scope.style = function () {
        return {
          'height': (newValue.h - 56) + 'px',
          'width': (newValue.w - 100) + 'px'
        };
      };

    }, true);

    w.bind('resize', function () {
      scope.$apply();
    });
  }
});