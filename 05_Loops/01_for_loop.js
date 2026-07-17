for (let i = 0; i < 10; i++) {
  const element = i;
  if (i === 5) {
    console.log("5 is Best Number");
  }
  console.log(element);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer value ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner value ${j} and outer value ${i}`);

    console.log(`${i} * ${j} = ${i * j}`);
  }
}

const myarr = ["flash", "spidermen", "batman"];

for (let i = 0; i < myarr.length; i++) {
  const element = myarr[i];
  console.log(element);
}

for (let i = 0; i < myarr.length; i++) {
  if (myarr[i] === "spidermen") {
    console.log(`${myarr[i]} is show`);
    break;
  }
  console.log(`values ${i} : ${myarr[i]}`);
}
for (let i = 0; i < myarr.length; i++) {
  if (myarr[i] === "spidermen") {
    console.log(`${myarr[i]} is show`);
    continue;
  }
  console.log(`values ${i} : ${myarr[i]}`);
}
