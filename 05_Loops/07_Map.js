const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//increase by 10

const IncreasedNums = numbers.map((num) => num + 10);

console.log(IncreasedNums); //[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

//using for Each
const newNum = [];
numbers.forEach((item) => {
  const items = item + 10;
  newNum.push(items);
});

console.log(newNum); //[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

//Chaining

//multiply by 10 and after that we have to increase by 2 and again we have to check whetaher numbers are greterthan 50.

const newNumbers = numbers
                        .map((num) => num * 10)
                        .map((num) => num + 2)
                        .filter((num) => num >= 50);

console.log(newNumbers); //[ 52, 62, 72, 82, 92, 102 ]
