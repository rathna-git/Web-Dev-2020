var database = [
  {
    username: 'Rathna',
    password: 'topsecret'
  },
  {
    username: "Sally",
    password: '123'
  },
  {
    username: 'Ingrid',
    password: '777'
  }
];

var newsfeed = [
  {
    username: 'Rathna',
    status: 'Hungryyyyyyy'
  },
  {
    username: 'Suresh',
    status: 'What is life?'
  },
  {
    username: 'Ronith',
    status: 'What\'s for dinner?!?!'
  }
];

var userNamePrompt = prompt('Enter your username: ');
var passwordPrompt = prompt('Enter your password: ');

function isUserValid(user,pass){
  for(var i=0; i<database.length; i++){
    if(user === database[i].username && pass === database[i].password){
      return true;
    }
  }
  return false;
}

var signIn = function(user,pass){
  if(isUserValid(user,pass)){
    console.log(newsfeed);
  } else {
    alert('Sorry! Wrong username and password');
  }
};

signIn(userNamePrompt, passwordPrompt);
