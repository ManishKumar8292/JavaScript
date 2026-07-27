function MultiByFive(num) {
  return num * 5;
}
MultiByFive.power = 2;

console.log(MultiByFive(2)); //10
console.log(MultiByFive.power); //2
console.log(MultiByFive.prototype); //{}

const str = new String("Manish");
console.log(str); //[String: 'Manish']
console.log(str.prototype); //undfined

const arr = new Array(1, 21, 23);
console.log(arr); //
console.log(arr.prototype); //undefined

function createUser(username, price) {
  this.username = username;
  this.price = price;
}

createUser.prototype.increasePrice = function () {
  return this.price++;
};

createUser.prototype.printMe = function () {
  console.log(`This is the username: ${this.username}`);
};

const chai = new createUser("chai", 25); //createUser { username: 'chai', price: 25 }
console.log(chai); //createUser { username: 'chai', price: 25 }
const tea = new createUser("tea", 250);
console.log(tea.printMe()); //This is the username: tea
console.log(tea.increasePrice()); //250;
console.log(tea.increasePrice()); //251

/* 
Here's what happens behind the screens when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to newly created object. If no explicit return value is specified from the constructor JavaScript assumes this, the newly crated object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object,array,function ,etc.), the newly created object is returned.
 */
