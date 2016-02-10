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


    self.addPost = function (){

      // this is meant to require text to be inputed so that an blank title can't be posted. However, it's not working.
      if(!this.title || this.title === '') {
        return
      }
    self.posts.push({title: self.title, upvotes: 0});
    self.title = '';
   }
    self.incrementUpvotes = function(post) {
      post.upvotes +=1;
    }
  }


