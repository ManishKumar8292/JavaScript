/* If Statement */

if (2 != 3) {
  console.log("excuted"); //excuted
}

const isLoginned = true;
if (isLoginned) {
  console.log("User Log In"); //User Log In
}

const temp = 40;

// if(temp <50){
//     console.log("Temprature is Less than 50 deg"); //Temprature is Less than 50 deg
// };
// console.log("Temprature is Greater Than 50 Deg"); //Temprature is Greater Than 50 Deg

if (temp <= 50) {
  console.log("Temprature is Less than 50 deg"); //Temprature is Less than 50 deg
} else {
  console.log("Temprature is Greater Than 50 Deg");
}

if (2 === "2") console.log("Equal"); //not print

if (2 === 2) console.log("Equal"); //Equal

/* const score = 50;
if (score > 100) {
  const student = "Manish";
  console.log(`${student} got score is ${score}`);
} else {
  console.log(`${student} got score is ${score}`); //student is not defined
}
 */

/* Nested If-else */

// const balance = 1000;

// if (balance < 500) {
//   console.log("Balance is lessthan 500");
// } else if (balance < 750) {
//   console.log("Balance is lessthan 750");
// } else if (balance < 900) {
//   console.log("Balance is lessthan 900");
// } else if (balance < 1200) {
//   console.log("Balance is lessthan 1200");
// } else {
//   console.log("Balance is Greater than 1200");
// }

/* const userLoggedInFromGoogle = true;
const userLoggedInFromEmail = true;
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  console.log("You can buy a course..");
}

if (userLoggedInFromEmail || userLoggedInFromGoogle) {
  if (userLoggedIn) {
    console.log("User Logged In");
    if (debitCard) {
      console.log("You Can Buy a Course");
    }
  }
}
 */

//Switch Case

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;

  default:
    console.log("Invalid Month");

    break;
}



