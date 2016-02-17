var app = angular.module('travelApp', ['ui.router',
                                       'templates',
                                       'ngFlowGrid']);

  app.config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {

// states relate to each "view page" we have in our app.
  $stateProvider
    .state('home',{
      url: "/",
      templateUrl: 'home/home_partial.html'
    })

    .state('profile', {
      url: "/profile",
      templateUrl: "profile/profile_partial.html"
    });

    $urlRouterProvider.otherwise("/profile")
}
