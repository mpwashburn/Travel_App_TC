var app = angular.module('travelApp', ['ui.router',
                                       'ngFlowGrid']);

  app.config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {

// states relate to each "view page" we have in our app.
  $stateProvider
    // .state('home',{
    //   url: "/",
    //   templateUrl: 'partials/home_partial.html',
    //   controller: 'contentCntrl'
    // })

    .state('profile', {
      url: "/profile",
      templateUrl: "partials/profile_partial.html"
    });

    $urlRouterProvider.otherwise("/profile")
}
