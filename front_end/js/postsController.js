app.controller("postsController", function (PostResource) {
    // var self takes the place of $scope
    console.log('postsController')
    var self = this
    self.posts = PostResource.posts

    // self.posts = [
    //   {title: 'post 1', upvotes: 5},
    //   {title: 'post 2', upvotes: 4},
    //   {title: 'post 3', upvotes: 2}
    //   ],


      self.addPost = function (){

        // this is meant to require text to be inputed so that an blank title can't be posted. However, it's not working.
      if(!self.title || self.title === '') {
          return;
        }
      self.posts.push({
        title: self.title,
        link: self.link,
        upvotes: 0,
        comments: [
              {author: "joe", body: "Awesome Text goes here", upvotes:0},
              {author: "Mary", body: "More awesome comments", upvotes:0}
        ]
      });

      self.title = '';
      self.link = '';
     };
      self.incrementUpvotes = function(posts) {
        self.posts.upvotes +=1;
      }
    })
