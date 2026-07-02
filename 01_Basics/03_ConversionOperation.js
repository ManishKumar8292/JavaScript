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
