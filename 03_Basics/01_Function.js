function sayMyName() {
  console.log("M");
  console.log("A");
  console.log("N");
  console.log("I");
  console.log("S");
  console.log("H");
}

sayMyName();

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// addTwoNumbers(5,6); //11

function addTwoNumbers(num1, num2) {
  //   let result = num1+num2;
  //   return result ;
  return num1 + num2;
}

const result = addTwoNumbers(5, 6);
console.log(result); //11

function printUser(user = "sam") {
  if (!user) {
    console.log("Please enter user name");
    return;
  }
  return `${user} Hello`;
}
const result1 = printUser("manish");
console.log(result1); //manish Hello
const result2 = printUser("");
console.log(result2); // Hello
const result3 = printUser();
console.log(result3); //Please enter user name

/* Rest Operator */

// function calculateCartPrice(val1,val2,...val){
//   return val;
// }
// console.log(calculateCartPrice(100,199,300,200,100,677)); //[ 300, 200, 100, 677 ]

function calculateCartPrice(...val) {
  return val;
}
console.log(calculateCartPrice(100, 199, 300, 200, 100, 677)); //[ 100,199,300, 200, 100, 677 ]

const user = {
  username: "Manish",
  price: 399,
};

function viewObject(anyObject) {
  console.log(
    `User Name is ${anyObject.username} and Price is ${anyObject.price}`,
  );
}
viewObject(user); //User Name is Manish and Price is 399
viewObject({
  username: "Hitesh",
  price: 599,
}); //User Name is Hitesh and Price is 599

function secondElement(arr) {
  return arr[1];
}

const arr1 = [100, 200, 300, 400, 500];

console.log(secondElement(arr1)); //200
console.log(secondElement([99, 100, 677])); //100
