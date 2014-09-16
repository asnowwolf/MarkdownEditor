'use strict';

angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.codemirror'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'views/main/index.html',
      controller: 'MainIndexCtrl as vm'
    });

    $urlRouterProvider.otherwise('/');
  })
;
