app.controller('postsCommentsContrl', function("PostResource",
                                               "$stateParams",
                                               "postsController"){
      var self = this
      self.postCmt = PostResource.posts[$stateParams.id];
      console.log('postsCommentsContrl');
});
