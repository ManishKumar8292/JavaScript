
//Singleton

//Object.create();


/* Object Literals */

const myKeys =Symbol("Key1");

let JsUser = {
    name:"Manish",
    "full name":"Manish Kumar",
    [myKeys]:"myKey",
    email:"manish@google.com",
    age:18,
    isLoginned:true,
    logingedDays : ["Monday","Sunday"],
    Address:"Jaipur"
}

console.log(JsUser.email); //manish@google.com
console.log(JsUser["full name"]); //Manish Kumar
console.log(JsUser[myKeys]); //myKey

JsUser.email="manish@chatgpt.com";
console.log(JsUser.email); //manish@chatgpt.com
// Object.freeze(JsUser);
// JsUser.email = "manish@microsoft.com";
// console.log(JsUser.email); //manish@chatgpt.com


JsUser.greeting=function(){
    console.log("Hello Js User");
}
console.log(JsUser); //{name: 'Manish','full name': 'Manish Kumar',email: 'manish@chatgpt.com',age: 18,isLoginned: true,logingedDays: [ 'Monday', 'Sunday' ],Address: 'Jaipur', greeting: [Function (anonymous)], [Symbol(Key1)]: 'myKey'}

console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()); //Hello Js User

JsUser.greetTwo=function(){
    console.log(`Hello Js ${this["full name"]}`);
    
}
console.log(JsUser.greetTwo()); //Hello Js Manish Kumar
