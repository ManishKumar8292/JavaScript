//=> this is a keyword that refer current context.

const user = {
  username: "Manish",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , Welcome To Website...`);
    console.log(this); //{username: 'Sam',price: 999, welcomeMessage: [Function: welcomeMessage]}
  },
};

user.welcomeMessage(); //Manish , Welcome To Website...
user.username = "Sam";
user.welcomeMessage(); //Sam , Welcome To Website...

console.log(this); //in node environment is returns a empty object {}

/* function chai() {
  const username = "hitesh";
  console.log(this); //it returns global object it means is a window object.
  console.log(this.username); //undefined
}
chai();
 */

const chai = function () {
  const username = "Hitesh";
  console.log(this.username); //undefined
};
chai();

const chai1 = () => {
  const username = "Hietsh";
  console.log(this); //{}
  console.log(this.username); //undefined
};
chai1();

// const addTwo = (n1, n2) => {
//   return n1 + n2;
// };

// const addTwo = (n1, n2) => n1 + n2;

const addTwo = (n1, n2) => n1 + n2;

console.log(addTwo(10, 18));

const returnObject = () => ({ username: "Manish" });
console.log(returnObject()); //{ username: 'Manish' }
