/* Memory => Stack and Heap */

/* 1. Stack Memory (Primitive Data Types)
=>Used for primitive data types:
A.String
B.Number
C.Boolean
D.Null
E.Undefined
F.Symbol
G.BigInt
=>Variables store the actual value.
=>When you assign one variable to another, a copy of the value is created.
=>Changing the copied variable does not affect the original variable. */

let myName ="Manish";
let anotherName = myName;
console.log(myName ,anotherName); //Manish Manish

anotherName = "Kumar";
console.log(myName ,anotherName); //Manish Kumar

/* 2. Heap Memory (Non-Primitive Data Types)
=>Used for reference types:
A.Objects
B.Arrays
C.Functions
=>Variables store a reference (address) to the object in memory.
=>Assigning one object variable to another copies the reference, not the object itself.
=>Changing one variable affects the other because both point to the same object. */

let user = {
    name:"Manish",
    email:"manish@google.com",
    upi:"upimanish@ybl"
}

let newUser = user;

console.log(newUser); //{ name: 'Manish', email: 'manish@google.com', upi: 'upimanish@ybl' }

console.log(user); //{ name: 'Manish', email: 'manish@google.com', upi: 'upimanish@ybl' }

newUser.email = "manishk@gmail.com";

console.log(user); //{ name: 'Manish', email: 'manishk@gmail.com', upi: 'upimanish@ybl' }
console.log(newUser); //{ name: 'Manish', email: 'manishk@gmail.com', upi: 'upimanish@ybl' }


