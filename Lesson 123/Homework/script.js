// 5. A function that returns a Promise which rejects after 2 seconds with an error message "Task 3 failed".
function task5() {
    return new Promise((_, reject) => {
      setTimeout(() => reject("Task 3 failed"), 2000);
    });
  }
  
  task5().catch((error) => console.log(error));
  
  
  // 6. A function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete".
  function task6() {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    return new Promise((resolve) => {
      setTimeout(() => resolve("Task 1 complete"), delay);
    });
  }
  
  task6().then((message) => console.log(message));
  
  
  // 7. A function that returns a Promise which resolves after a random delay between 1 and 3 seconds with the message "First". Then chain another .then.
  function task7() {
    const delay1 = Math.floor(Math.random() * 3000) + 1000;
    return new Promise((resolve) => {
      setTimeout(() => resolve("First"), delay1);
    })
      .then((message) => {
        console.log(message);
        const delay2 = Math.floor(Math.random() * 3000) + 1000;
        return new Promise((resolve) => {
          setTimeout(() => resolve("Second"), delay2);
        });
      })
      .then((message) => console.log(message));
  }
  
  task7();
  
  
  // 8. A function that returns a Promise which rejects after a random delay between 1 and 4 seconds with an error message "Task 3 failed".
  function task8() {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    return new Promise((_, reject) => {
      setTimeout(() => reject("Task 3 failed"), delay);
    });
  }
  
  task8().catch((error) => console.log(error));
  
  
  // 9. A function that returns a Promise which resolves after a random delay between 1 and 5 seconds with a random message.
  function task9() {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    const randomNumber = Math.random();
    return new Promise((resolve) => {
      setTimeout(() => {
        if (randomNumber > 0.5) {
          resolve("Task 1 complete");
        } else {
          resolve("Task 1 was quick");
        }
      }, delay);
    });
  }
  
  task9().then((message) => console.log(message));
  
  
  // 10. A function that returns a Promise which resolves or rejects after a random delay between 1 and 4 seconds.
  function task10() {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    const randomNumber = Math.random();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomNumber < 0.3) {
          reject("Task 3 failed");
        } else {
          resolve("Task 3 complete");
        }
      }, delay);
    });
  }
  
  task10()
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
  