const myArr = [1,2,3,4,5,6];

console.log(myArr); //[ 1, 2, 3, 4, 5, 6 ]

console.log(myArr[2]); //3

myArr.push("Code");
myArr.push("Code2");

console.log(myArr);//[ 1, 2, 3, 4, 5, 6, 'Code','Code2']

myArr.pop();
console.log(myArr); //[ 1, 2, 3, 4, 5, 6, 'Code']


myArr.unshift("Manish");
myArr.unshift(true)

console.log(myArr); //[ true, 'Manish', 1, 2, 3, 4, 5, 6, 'Code' ]

myArr.shift();
console.log(myArr); //[ 'Manish', 1, 2, 3, 4, 5, 6, 'Code' ]


console.log(myArr.includes(4)); //true
console.log(myArr.includes(100)); //false
console.log(myArr.indexOf('Code')); //7
console.log(myArr.indexOf(100)); //-1
console.log(myArr.find((item)=> item>2)); //3



/* Slice and Splice */

console.log("Orignal Array: ",myArr); //Orignal Array:  [ 'Manish', 1, 2, 3, 4, 5, 6, 'Code' ]
let newArr = myArr.slice(1,5);
console.log(newArr); //[ 1, 2, 3, 4 ]
console.log("Orignal Array: ",myArr); //Orignal Array:  [ 'Manish', 1, 2, 3, 4, 5, 6, 'Code' ]
let newArr2 = myArr.splice(1,5);
console.log(newArr2); //[ 1, 2, 3, 4, 5 ]
console.log("Orignal Array: ",myArr); //Orignal Array:  [ 'Manish', 6, 'Code' ]



/* +++++++++++++++++++++++++++++++++ Part 2 ++++++++++++++++++++++++++++++++ */

const names = ["Ravi","Ashish","Riya"];
const add=["Ranchi","Bhopal","Jaipur"];

// names.push(add);

// console.log(names); //[ 'Ravi', 'Ashish', 'Riya', [ 'Ranchi', 'Bhopal', 'Jaipur' ] ]

// names.concat(add);
// console.log(names); //[ 'Ravi', 'Ashish', 'Riya', [ 'Ranchi', 'Bhopal', 'Jaipur' ] ]

let Details = names.concat(add);
console.log(Details); //[ 'Ravi', 'Ashish', 'Riya', 'Ranchi', 'Bhopal', 'Jaipur' ]


const details2 = [...names,...add];

console.log(details2); //[ 'Ravi', 'Ashish', 'Riya', 'Ranchi', 'Bhopal', 'Jaipur' ]


const arr = [1,2,3,4,[5,6],[7,8,[9,10,12,[14,13]]]];
console.log(arr);//[ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8, [ 9, 10, 12, [Array] ] ] ]

const newArrFlat = arr.flat(Infinity);
console.log(newArrFlat); //[1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 12, 14, 13]

console.log(Array.isArray("Hitesh")); //false
console.log(Array.from("Hitesh")); //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"Manish"})); //[]


const score1=100;
const score2=200;
const score3=300;
const score4=400;

console.log(Array.of(score1,score2,score3,score4)); //[ 100, 200, 300, 400 ]









