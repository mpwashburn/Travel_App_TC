var app = angular.module('travelApp', ['ngResource',
                                       'ui.router',])

  .config(PostRouter);
  function PostRouter($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('index',{
      url: '/',
      templateUrl: '/index.html',
      controller: 'postsController'
    });
    $urlRouterProvider.otherwise('home');
  }
