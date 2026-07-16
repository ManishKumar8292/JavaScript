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
