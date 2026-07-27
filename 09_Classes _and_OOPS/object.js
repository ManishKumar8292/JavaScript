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
