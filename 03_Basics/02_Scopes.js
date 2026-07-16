/* let a = 10;
const b = 20;
var c = 30;

console.log('a : ',a); //a :  10
console.log('b : ',b); //b :  20
console.log('c : ',c); //c :  30  */

/* var c=900;
if(true){
    let a=10;
    const b=90;
    var c=30;
    console.log("Inner :", a); //Inner : 10
    
}
// console.log(a); //undefined
// console.log(b); //undefined
console.log(c); //30 */

/* function print(){
    var result = 20;
     console.log(result);
     
}
console.log(print()); //20

var result = 100; //100
console.log(result);

console.log(print()); //20 */

/* ==> Var is functional scoped variable and let and const is block scoped variable */

/* for (var index = 1; index <=10; index++) {
    console.log(index); //1,2,3,4,5,6,7,8,9,10
}
console.log(index); //11
 */

/* for (let index = 1; index <=10; index++) {
  console.log(index); //1,2,3,4,5,6,7,8,9,10
}
// console.log(index); //index is not defined */

/* Closure */

function outer() {
  const userName = "Manish";
  function inner() {
    const website = "YouTube";
    console.log(`${userName} and ${website}`);
  }
  // console.log(website); //website is not defined
  inner();
}
outer(); //Manish and YouTube

if (true) {
  const username = "Hitesh";
  if (username === "Hitesh") {
    const web = "YouTube";
    console.log(`${username} and ${web}`); //Hitesh and YouTube
  }
  // console.log(web); // web is not defined
}

console.log(addOne(10)); //11

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(12)); //Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(12)); //14
