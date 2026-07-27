class UserDetails {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}xyz`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new UserDetails("chai", "abc@gmail.com", "add12321");
console.log(chai); //username: 'chai', email: 'abc@gmail.com',password: 'add12321'

console.log(chai.encryptPassword()); //add12321xyz
console.log(chai.changeUsername()); //CHAI

//Behind

function UserData(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

const chaiaurcode = new UserData(
  "Chaiaurcode",
  "chaiaurhum@gmail.com",
  "123221",
);
console.log(chaiaurcode); //username: 'Chaiaurcode', email: 'chaiaurhum@gmail.com',password: '123221'

UserData.prototype.encryptPassword = function () {
  return `${this.password}xyz`;
};

console.log(chaiaurcode.encryptPassword()); //123221xyz

UserData.prototype.changeUsername = function () {
  return this.username.toUpperCase();
};
console.log(chaiaurcode.changeUsername()); //CHAIAURCODE
