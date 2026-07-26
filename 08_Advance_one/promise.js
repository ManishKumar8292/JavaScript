const promiseOne = new Promise((resolve, reject) => {
  //DB Calls, Network Calls
  //Do async task here
  //cryptography

  setTimeout(() => {
    console.log("Promise is completed");
    resolve();
  }, 2000);
});

promiseOne.then(() => {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("asyn task 1");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async Task 1 consumed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      userName: "Manish",
      userEmail: "manish@example.com",
    });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user); //{ userName: 'Manish', userEmail: 'manish@example.com' }
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "Manish", password: "Jaimatadi123@" });
    } else {
      reject("Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user?.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The Promise is either Resolved or Rejected");
  });

const promiseFive = new Promise((resolve, rejected) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      rejected("ERROR: JS went Wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function fetchingdata() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchingdata();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
