let str = "Hello, World!";
// Accessing characters in a string
console.log(str); //Hello, World!

console.log(str[0]); // Output: H
console.log(str.charAt(1)); // Output: e

// String length
console.log(str.length); // Output: 13

let name = "Manish";
let repoCount =50;

let santance = `Hello my name is ${name} and my Repo is ${repoCount} Value`;
console.log(santance); //Hello my name is Manish and my Repo is 50 Value

let mystr = new String("Manish-mv Verma");
console.log(mystr); //[String: 'Manish-mv']

// console.log(mystr.anchor(Verma));

//Methods

const sentence = "The quick brown fox jumps over the lazy dog.";
let index =10;

console.log(sentence.at(index)); //b

index=-11;

console.log(sentence.at(index)); //e

console.log(sentence.big()); //<big>The quick brown fox jumps over the lazy dog.</big>

console.log(sentence.blink()); //<blink>The quick brown fox jumps over the lazy dog.</blink>

console.log(sentence.bold()); //<b>The quick brown fox jumps over the lazy dog.</b>

console.log(sentence.charAt(4)); //q

console.log(sentence.indexOf('q')); //4

console.log(sentence.charCodeAt(1)); //104

console.log(sentence.codePointAt(3)); //32

console.log(sentence.concat(" Manish")); //The quick brown fox jumps over the lazy dog. Manish

console.log(sentence.endsWith("dog.")); //true
console.log(sentence.endsWith("mamish")); //false

console.log(sentence.includes("quick")); //true
console.log(sentence.includes("Men")); //false

let userName = "rahulr";
console.log(userName.lastIndexOf('r')); //5
console.log(userName.indexOf('r')); //0

console.log(userName.match("l")); //[ 'l', index: 4, input: 'rahulr', groups: undefined ]
console.log(userName.match("m")); //null

let newuser = "hitesh chodhaury ";

// console.log(newuser.matchAll("h"));

console.log(`Hi I'm ${newuser.repeat(4)}`); //Hi I'm hitesh chodhaury hitesh chodhaury hitesh chodhaury hitesh chodhaury 

console.log(newuser.replace("chodhaury","Kumar")); //hitesh Kumar 

let oldUser = "hitesh chodhaury hitesh chodhaury hitesh chodhaury hitesh chodhaury";

console.log(oldUser.replaceAll("chodhaury","Kumar")); //hitesh Kumar hitesh Kumar hitesh Kumar hitesh Kumar

console.log(oldUser.slice(0,4));  //hite

console.log(oldUser.split(" ")); //['hitesh', 'chodhaury','hitesh', 'chodhaury','hitesh', 'chodhaury','hitesh', 'chodhaury']

console.log(oldUser.split(" ",1)); //[ 'hitesh' ]
console.log(oldUser.split("")); //['h', 'i', 't', 'e', 's', 'h', ' ', 'c', 'h','o', 'd', 'h', 'a', 'u', 'r', 'y', ' ', 'h', 'i', 't', 'e', 's', 'h', ' ', 'c', 'h', 'o','d', 'h', 'a', 'u', 'r', 'y', ' ', 'h', 'i','t', 'e', 's', 'h', ' ', 'c', 'h', 'o', 'd','h', 'a', 'u', 'r', 'y', ' ', 'h', 'i', 't','e', 's', 'h', ' ', 'c', 'h', 'o', 'd', 'h','a', 'u', 'r', 'y']


let mySchool = "oxford university";

console.log(mySchool.substring(1,5)); //xfor

let school ="ABCD";

console.log(school.toLowerCase()); //abcd

console.log(mySchool.toUpperCase()) //OXFORD UNIVERSITY

let age =34;
console.log(typeof age.toString()); //string

let userNames ="   This is a sentance. ";
console.log(userNames.trim()); //This is a sentance.
console.log(userNames.trimEnd()); //   This is a sentance.
console.log(userNames.trimStart()); //"This is a sentance. " 

console.log(school.valueOf()); //ABCD




















