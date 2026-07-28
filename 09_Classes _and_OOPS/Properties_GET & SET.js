function User(email, password) {
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  this.email = email;
  this.password = password;
}

const chai = new User("chai@chai.com", "123abc");
console.log(chai.email); //CHAI@CHAI.COM
console.log(chai.password); //123ABC
