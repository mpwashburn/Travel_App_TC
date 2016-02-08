var app = angular.module('travelApp', [])
  .controller('MainController', MainController);

  MainController.$inject = ['$http'];

  function MainController(){
    var self = this;

    self.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 4},
    {title: 'post 3', upvotes: 2}
    ],

    self.addpost = function (){
    self.posts.push({title: self.title, upvotes: 0});
    self.title = '';
  }
  }


