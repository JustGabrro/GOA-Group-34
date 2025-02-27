// Task 1: Simple Promise that resolves after 2 seconds with a message
new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, 2000);
  }).then((message) => console.log(message));
  
  // Task 2: Promise that rejects immediately with an error message
  new Promise((_, reject) => {
    reject("Task 2 failed");
  }).catch((error) => console.log(error));
  
  // Task 3: Promise that resolves with a number, doubles it, then logs the result
  new Promise((resolve) => {
    resolve(5);
  })
    .then((number) => number * 2)
    .then((doubledNumber) => console.log(doubledNumber));
  
  // Task 4: Function returning a Promise that resolves after 2 seconds, then logs "Second" after 1 second
  function task() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("First");
      }, 2000);
    });
  }
  
  task()
    .then((message) => {
      console.log(message);
      return new Promise((resolve) => setTimeout(resolve, 1000)); // wait for 1 second
    })
    .then(() => console.log("Second"));
  
  // Task 5: Function returning a Promise that rejects after 2 seconds with an error message
  function taskWithError() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Task 3 failed");
      }, 2000);
    });
  }
  
  taskWithError().catch((error) => console.log(error));
  