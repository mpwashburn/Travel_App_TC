app.controller('usersCntrl', usersCntrl)

function usersCntrl(){
  var self = this;
  console.log("Hitting usersCntrl");
  self.usersBase = [
    {f_name: "Michael", l_name: "Washburn", email: "washburn.michael@gmail.com", username: "mpwashburn", password: "123456"},
    {f_name:"Loretta", l_name: "Jones", email: "lorettajones@gmail.com", username: "", password: "123456"}
  ];

  self.addUser = addUser;
  self.deleteUser = deleteUser;
  self.updateUser = updateUser;

// adds a user to userBase
  function addUser(){
    self.usersBase.push({f_name: self.text, l_name: self.text, email: self.text, username: self.text, password: self.text});
    self.text = null;
  }

  function deleteUser($index){
    self.userBase.splice($index, 1);
  }

  function updateUser(){

  }

}
