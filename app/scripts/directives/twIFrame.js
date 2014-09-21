'use strict';

angular.module('app').directive('twIFrame', function twIFrame($sanitize) {
  return {
    restrict: 'A',
    scope: {
      html: '=',
      css: '='
    },
    require: '^ngModel',
    link: function (scope, element, attrs, ngModel) {
      var frame = element[0].contentWindow;
      ngModel.$setViewValue(frame);
      var setContent = function(html, css) {
        frame.document.body.innerHTML = '<style type="text/css">' + css + '</style>' + $sanitize(html);
      };
      scope.$watch('html+css', function() {
        setContent(scope.html, scope.css);
      });
      frame.onload = function() {
        setContent(scope.html, scope.css);
      };
    }
  };
});