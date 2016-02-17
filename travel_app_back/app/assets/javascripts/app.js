// templates was injected here from the gem angular-rails template
var app = angular.module('travelApp', ['ui.router',
                                       'templates',
                                       'ngFlowGrid']);


app.config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {

// states relate to each "view page" we have in our app.
  $stateProvider
    .state('home',{
      url: "/",
      templateUrl: 'home/_home.html'
    })

    .state('profile', {
      url: "/profile",
      templateUrl: "users/_users.html"
    })

    .state('display',{
      url: '/display',
      templateUrl:'display/_display.html'
    })

    $urlRouterProvider.otherwise("/profile")
}
