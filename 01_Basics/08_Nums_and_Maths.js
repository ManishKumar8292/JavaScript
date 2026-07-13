let score=400;

console.log(typeof score,score); //number 400

let balance = new Number(300);
console.log(typeof balance, balance); //object [Number: 300]
console.log(balance.toString()); //300 string
 console.log(balance.toFixed(2)); //300.00


 let otherNumber = 123.545768;
 console.log(otherNumber.toPrecision(2)); //1.2e+2
 console.log(otherNumber.toPrecision(3)); //124
 console.log(otherNumber.toPrecision(4)); //123.5
 console.log(otherNumber.toPrecision(5)); //123.55
 

const hundreds= 1000000;
console.log(hundreds.toLocaleString()); //1,000,000
console.log(hundreds.toLocaleString("en-IN")); //10,00,000



/* +++++++++++++++++ Maths +++++++++++++++++++ */
console.log(Math);


console.log(Math.abs(-6)); //6 negative convert in positive value
console.log(Math.round(4.8)); //5
console.log(Math.ceil(4.6)); //5
console.log(Math.floor(4.6)); //4
console.log(Math.sqrt(4)); //2
console.log(Math.min(8,2,3,4,5,6,7,-9)); //-9
console.log(Math.max(8,2,3,4,5,6,7,-9)); //8


let val = Math.random();

console.log(val);//0.6047261381192064

val=Math.random()*10;
console.log(val); //0.21877143430042656

val= Math.floor((Math.random()*10)+1);
console.log(val); //9


let min=10;
let max=20;

val=(Math.floor((Math.random()*(max-min+1))+min));
console.log(val); //17








