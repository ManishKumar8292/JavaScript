const myObj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift By Google",
};

for (const key in myObj) {
  console.log(myObj[key]); //JavaScript C++ Ruby Swift By Google
}

const programming = ["java", "cpp", "javascript"];
for (const key in programming) {
  //   console.log(key); //0 1 2
  console.log(programming[key]); //java cpp javascript
}

/* const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(map); //iration is not possible in map
}
 */