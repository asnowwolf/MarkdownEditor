'use strict';

angular.module('app').config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.hashPrefix('!');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/main/index.html',
    controller: 'MainIndexCtrl as vm'
  });

  $urlRouterProvider.otherwise('/');
});