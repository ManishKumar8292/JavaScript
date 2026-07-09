/* DataType => Primitive DataTypes & Non-Primitive DataTypes(Reference Types) */

/* Primitive DataTypes */

//1.Number

let Score =100;
console.log(Score,typeof Score); //100 number

//2.String

let myName ="Manish";
console.log(myName,typeof myName); //Manish string

//3. Undefined

let names;
console.log(names, typeof names); //undefined undefined

//4.Null

let myAge = null;
console.log(myAge, typeof myAge); //null object

//5.BigInt

let bigNumber = 12334456566n;
console.log(bigNumber, typeof bigNumber); //12334456566n bigint

//6. Symbol

let id = Symbol('123');
let anotherId = Symbol('123');

console.log(id,typeof id); //Symbol(123) symbol
console.log(anotherId,typeof anotherId);; //Symbol(123) symbol
console.log(id===anotherId); //false

//7. Boolean

let isActive =true;
console.log(isActive, typeof isActive); //true boolean

/* Non-Primitive Datatypes (Reference Datatypes) */

//1.Array

let superHeroes = ["Shaktiman","Nagraj","Doga"]

console.log(superHeroes, typeof superHeroes); //[ 'Shaktiman', 'Nagraj', 'Doga' ] object

//2.Object

let myDetails = {
    name:"Manish",
    age:29
}
console.log(myDetails,typeof myDetails); //{ name: 'Manish', age: 29 } object

//3.Function

const helloFunction = function(){
    console.log("Hello World");
}
console.log(helloFunction,typeof helloFunction); //[Function: helloFunction] function





