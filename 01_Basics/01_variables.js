let accountName = "SBI";
const accountId = 2332;
var accountType = "Saving";
accountCity = "Jaipur";

accountName = "Bank Of India";

console.log(accountName); // we can re-assign the value using let, it is block scoped

// accountId = 23;
console.log(accountId); // Const can't be re-assign the value,it is block scoped

accountType = "Current";
console.log(accountType); // Global variable it is old

accountCity = "Ranchi";

console.log(accountCity);

console.table([accountId, accountName, accountType, accountCity]);

// const city; // can't be declear without any value;
// console.log(city);

let city;
console.log(city); // we can declear without any value //undefined
