// Three Promises that resolve based on random conditions

const promise1 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Promise 1 resolved with a message");
    } else {
      setTimeout(() => {
        resolve("Promise 1 resolved after 2 seconds");
      }, 2000);
    }
  });
  
  const promise2 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Promise 2 resolved with a message");
    } else {
      setTimeout(() => {
        resolve("Promise 2 resolved after 2 seconds");
      }, 2000);
    }
  });
  
  const promise3 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Promise 3 resolved with a message");
    } else {
      setTimeout(() => {
        resolve("Promise 3 resolved after 2 seconds");
      }, 2000);
    }
  });
  
  Promise.all([promise1, promise2, promise3]).then(values => {
    console.log(values);
  });
  




  // A promise that rejects after 1 second with a specific error message

  const promiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("This is a rejection error after 1 second"));
    }, 1000);
  });
  
  promiseReject.catch(error => {
    console.log(error.message);
  });
  