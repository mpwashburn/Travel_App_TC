var app = angular.module('travelApp', ['ngResource',
                                       'ui.router'])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    .state('home',{
      url: '/home',
      templateUrl: '/home.html',
      controller: 'postsController'
    });
    $urlRouterProvider.otherwise('home');
  }])
