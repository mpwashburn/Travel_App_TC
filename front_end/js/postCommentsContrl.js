app.controller('postsCommentsContrl', function("PostResource",
                                               "$stateParams"){
      var self = this
      self.postCmt = PostResource.posts[$stateParams.id];
});
