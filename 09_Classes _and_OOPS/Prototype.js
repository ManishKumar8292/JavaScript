let heros = ["Thor", "Spidermen"];
let heroPowers = {
  Thor: "Hammer",
  spidermen: "Sling",

  getSpidermen: function () {
    console.log(`Spidy Power is ${this.spidermen}`);
  },
};

console.log(heroPowers.getSpidermen()); //Spidy Power is Sling

Object.prototype.manish = function () {
  console.log("Manish is present in all objects");
};

heroPowers.manish(); //Manish is present in all objects
heros.manish(); //Manish is present in all objects

Array.prototype.heyManish = function () {
  console.log("Manish says Hello in array");
};

heros.heyManish(); //Manish says Hello in array
// heroPowers.heyManish();

//Inhertance
const User = {
  name: "Chai",
  email: "Chai@google.com",
};
const Teacher = {
  makeVideo: true,
};

const TeacherSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignments: "JS",
  fulltime: true,
  __proto__: TeacherSupport,
};

Teacher.__proto__ = User;

//Modern Syntax
Object.setPrototypeOf(TeacherSupport, Teacher);

let myName = "Manish        ";
let myChannel = "Chai    ";

console.log(myName.length); //14
console.log(myChannel.length); //8

//we want to crate a trueLength method who return actual length of string

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`The True Length is ${this.trim().length}`);
};

myName.trueLength(); //Manish  //The True Length is 6
"ChaiAurCode   ".trueLength(); //ChaiAurCode //The True Length is 11
