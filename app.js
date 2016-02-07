var app = angular.module('travelApp', [])
  .controller('MainController', MainController)

  function MainController(){
    var self = this

    this.test = "MainController working"
  }
