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






