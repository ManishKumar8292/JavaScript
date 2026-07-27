class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New Couser added by ${this.username}`);
  }
}

const chai = new Teacher("Chai", "chai@chai.com", "123221");
chai.addCourse(); //New Couser added by Chai
chai.logMe(); //USERNAME is Chai
const masalaChai = new User("Masala");
console.log(masalaChai.logMe()); //USERNAME is Masala
// console.log(masalaChai.addCourse());

console.log(chai instanceof Teacher); //true
console.log(masalaChai instanceof Teacher); //false
console.log(chai instanceof User); //true
