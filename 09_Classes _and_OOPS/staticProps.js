class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    return "123";
  }
}

const chai = new User("chai");
chai.logMe(); //Username: chai\
// console.log(chai.createId()); //123 befire static

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
}

const newUser = new Teacher("Manish", "db@123.com", "gfdhgnmdn");
newUser.logMe(); //Username: Manish
// console.log(newUser.createId());
