/* Object Literals */

const user = {
  usename: "Manish",
  age: 30,
  islogin: true,
  getDetails: function () {
    // console.log("Got user details from db.");
    console.log(this); //{ usename: 'Manish',age: 30,islogin: true,getDetails: [Function: getDetails]}
    console.log(`Username : ${this.usename}`); //Username : Manish
  },
};

//console.log(user.usename);
//console.log(user.getDetails());
//console.log(this); //window object

function User(username, loginCount, isLogin) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLogin = isLogin;
  this.greeting = function () {
    console.log(`Hello ${this.username}`);
  };
  //   return this;
}

const userOne = User("Manish", 12, true);
console.log(userOne); //{  username: 'Manish',loginCount: 12,isLogin: true}
const userTwo = User("Hitesh", 1, false);
console.log(userTwo); //{  username: 'Hitesh',loginCount: 1,isLogin: false}
console.log(userOne); //{  username: 'Hitesh',loginCount: 1,isLogin: false}

const userOneNEW = new User("Manish", 12, true);
console.log(userOneNEW); //{ username: 'Manish', loginCount: 12, isLogin: true }
const userTwoNEW = new User("Hitesh", 12, false);
console.log(userTwoNEW); //{ username: 'Hitesh', loginCount: 12, isLogin: false }
console.log(userOneNEW); //{ username: 'Manish', loginCount: 12, isLogin: true }

//with new keyword firstly creates a new object
//construction function calls
//this keyword are inject

console.log(userOneNEW.greeting()); //Hello Manish
console.log(userOneNEW.constructor); //[Function: User]
