//for of

let arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

let greeting = "Hello World!";
for (const greet of greeting) {
  //console.log(`char of greeting is  ${greet}`);
}

//Map
let map = new Map();
console.log(map); //Map(0) {}

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

//console.log(map); //{'IN' => 'India','USA' => 'United States of America','FR' => 'France'}

for (const key of map) {
  //console.log(key); //[ 'IN', 'India' ][ 'USA', 'United States of America'][ 'FR', 'France' ]
}

for (const [key, value] of map) {
  //console.log(`${key} :- ${value}`);
}


/* const myObj = {
    'game1':"NFS",
    'game2':"Spidermen"
}

for (const key of myObj) {
    console.log(key);
    
} */