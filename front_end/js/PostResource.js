// factories need to be set up here on their page, its script tag in index.html, and passed through the respective controller
app.factory("PostResource", function ($resource){
  var o = {
   posts: []
  };
return o;

  })  ;
