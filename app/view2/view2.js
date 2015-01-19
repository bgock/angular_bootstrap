'use strict';

var view2 = angular.module('myApp.view2', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope',function(sc) {
      sc.myInterval = 5000;
      var slides = sc.slides = [];
      sc.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
          //image: 'http://placekitten.com/' + newWidth + '/300',
          image:'assets/img/big.jpg',
          text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
      };
      for (var i=0; i<4; i++) {
        sc.addSlide();
      }
}]);

