const nums = [1, 2, 3];

const sum = nums.reduce((acc, curr) => {
  console.log(`Acc value ${acc} and current Value ${curr}`);
  /*     Acc value 0 and current Value 1
       Acc value 1 and current Value 2
       Acc value 3 and current Value 3 */
  return acc + curr;
}, 0);

console.log(sum); //6

const Total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(Total); //6

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const TotalPrice = shoppingCart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log(TotalPrice); //22996
