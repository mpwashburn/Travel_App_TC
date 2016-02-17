app.controller('contentCntrl', contentCntrl)

function contentCntrl(contentFactory){
  var self = this
  self.test = "Let's post some content!"
  self.content = contentFactory.content
  self.content = [
      {title: 'Grand Central Market Los Angeles',
       image: 'assets/images/grand-central-market-los-angeles',
       src_url: 'http:"//postcardandmenu.com/2015/01/grand-central-market-los-angeles/"',
       body: 'The Grand Central Market is nearly a century old, but their commitment to bringing communities around a shared table has stayed the same. This historic Downtown Los Angeles landmark... ',
       upvotes: 0,
       downvotes: 0},
  ],

  self.newContent = addContent;
  self.deleteContent = deleteContent;
  self.updateContent = updateContent;

  function newContent(){
    self.content.push({title: text, image: text, src_url: url, body: text, upvotes: 0, downvotes: 0});
    self.text = null;
  }

  function updateContent (){

  }

  function deleteContent($index){
    self.content.splice($index,1);


  }







}
