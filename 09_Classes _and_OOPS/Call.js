function Setusername(username) {
  this.username = username;
}

function CreateUserData(username, email, password) {
  Setusername.call(this.username);
  this.email = email;
  this.password = password;
}

const chai = new CreateUserData("Manish", "manish@chai.com", "12334");
console.log(chai); //CreateUserData { username: 'Manish', email: 'manish@chai.com', password: '12334' }
