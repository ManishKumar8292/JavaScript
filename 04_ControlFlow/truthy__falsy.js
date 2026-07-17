// Truthy Values ==> [], String,Number, Object,true ,1 ,"0" ," ",'false',function(){}
// Falsy Values ==> false,empty string "",null,undefined ,0,-0,BigInt ,NaN

// const userEmail = "m@manish.ai"; // Got User Email
// const userEmail = []; // Got User Email
// const userEmail = ""; // Don't have User Email
// const userEmail = 123; // Got User Email
// const userEmail = {}; // Got User Email
// let userEmail; //Don't have User Email
// let userEmail = null; //Don't have User Email

const userEmail = true; //Got User Email
if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Don't have User Email");
}

//check a array is empty
const emptyArr = [];
if (emptyArr.length === 0) {
  console.log("Array is Empty");
}

//check a object is empty

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("Object is Empty");
}

console.log(false == 0); //true
console.log(false == ""); //true
console.log(0 == ""); //true


//Nullish Coalescing Operator (??) : null,undefined

// let val1;
// val1 = 5 ?? 10; //5
// val1 = null ?? 10; //10
// val1 = undefined ?? 15; //15
// val1 = null ?? 10 ?? 20; //10

// console.log(val1);

/* Ternary operator */

/* condition ? true : false */

const iceTea = 80;

iceTea >= 80 ?console.log("Greter or equal 80") : console.log("Less than 80"); //Greter or equal 80
""