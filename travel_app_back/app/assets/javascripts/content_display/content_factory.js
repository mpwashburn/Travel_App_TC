app.factory('contentFactory', ['$http', function($http){
  var c = {
    content:[],
    getAll:  function () {
      return $http.get('http://localhost:3000/contents').then(function (contents) {
        c.content = contents
      })
    },
    // upvotes: function(content) {
    //   return $http.put('/content/' + content.id + '/upvotes.json')
    //     .success(function(content){
    //       content.upvotes +=1;
    //     })
    // }
    create: function(content) {
      return $http.post('/contents.json', content).success(function(contents){
        c.posts.push(contents);
      })
    }

  };
  return c;
}])
