var app = angular.module('travelApp', ['ngResource',
                                       'ui.router',])

  .config(PostRouter);
  function PostRouter($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('home',{
      url: '/home',
      templateUrl: '/home.html',
      controller: 'postsController'
    })
    .state('posts',{
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'postsController'
    });
    $urlRouterProvider.otherwise('home');
  }
