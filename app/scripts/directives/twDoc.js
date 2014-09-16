'use strict';

angular.module('app').directive('twDoc', function twDoc() {
  return {
    restrict: 'A',
    scope: {
      html: '=twDoc'
    },
    link: function (scope, element, attrs) {
      var frame = element[0].contentWindow;

      scope.$watch('html', function(html) {
        frame.document.body.innerHTML = html;
      });
      frame.onload = function() {
        frame.document.body.innerHTML = scope.html;
      };
    }
  };
});