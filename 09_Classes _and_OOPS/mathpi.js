const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/* {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */

const chai = {
  name: "Ginger Chai",
  price: 250,
  isAvailable: true,
  chaibani: function () {
    console.log("Chai Nahi Bani");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* { value: 250, writable: true, enumerable: true, configurable: true } */

Object.defineProperty(chai, "name", {
  enumerable: false,
});

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} ${value}`); //price 250 ,isAvailable true
  }
}
