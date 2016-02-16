var app = angular.module('travelApp', ['ui.router']);

  app.config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {

// states relate to each "view page" we have in our app.
  $stateProvider
    .state('home',{
      url: "/",
      templateUrl: "home_partial.html"
    })

    .state('profile', {
      url: "/profile",
      templateUrl: "profile_partial.html"
    });

    $urlRouterProvider.otherwise("/")
}
