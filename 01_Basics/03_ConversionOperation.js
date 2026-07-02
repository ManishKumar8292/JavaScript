/* Converting into Number */
let score = "33";
let scoreInNumber = Number(score);
console.log(scoreInNumber, typeof scoreInNumber); //33 number

let score2 = "33a";
let score2Number = Number(score2);
console.log(score2Number, typeof score2Number); //NaN number

let test = "pass";
let test2 = Number(test);
console.log(test2, typeof test2); ////NaN number

let isAdmin = true;
let NumberIsAdmin = Number(isAdmin);
console.log(NumberIsAdmin, typeof NumberIsAdmin); //1 number

/* Converting into Boolean */

let isLogin = 1;
let BooleanIsLogin = Boolean(isLogin);
console.log(BooleanIsLogin, typeof BooleanIsLogin); //true boolean

/* Converting into string */

let isPassed = true;
let StringIsPassed = String(isPassed);
console.log(StringIsPassed, typeof StringIsPassed); //true string

let marks = 33;
let marksInString = String(marks);
console.log(marksInString, typeof marksInString); //33 string

/* <============= Operations  =============> */

let value = 3;
let negValue = -value;
console.log(negValue); //-3

console.log(2 + 2); //4
console.log(2 - 2); //0
console.log(2 * 2); //4
console.log(2 ** 3); //8
console.log(2 / 3); //0.6666666666666666
console.log(4 % 3); //1

let str1 = "Hello";
let str2 = " Manish";
let str3 = str1 + str2;
console.log(str3); //Hello Manish

console.log(1 + "2"); //12
console.log("1" + 2); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "3"); //33

console.log(+true); //1
console.log(+false); //0
console.log(+""); //0

let num1, num2, num3, num4;
num1 = num2 = num3 = num4 = 2 + 2;
console.log(num2); //4

let gameCount = 100;
gameCount++;
console.log(gameCount); //101
++gameCount;
console.log(gameCount); //102
