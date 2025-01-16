// Function to manually destructure an object into an array of values
function manualDestructing(obj) {
    let valuesArray = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        valuesArray.push(obj[key]);
      }
    }
    return valuesArray;
  }
  
  // Array Destructuring
  let [first, second, , fourth] = [1, 2, 3, 4, 5];
  console.log(first);    
  console.log(second);  
  console.log(fourth);   
  
  // Object Destructuring
  const user = { username: 'Alice', age: 25, city: 'Wonderland' };
  let { username, age } = user;
  console.log(username);
  console.log(age);      
  
  // Renaming Variables
  let { username: name, age: userAge } = user;
  console.log(name);   
  console.log(userAge);  
  
  // Skipping Values
  let [a, , c] = [1, 2, 3, 4];
  console.log(a);       
  console.log(c);       
  
  // Destructuring in Loops
  const people = [{ name: 'John', age: 21 }, { name: 'Jane', age: 25 }];
  for (let { name, age } of people) {
    console.log(`${name} is ${age} years old`);
  }
  
  // Combining Destructuring and Rest Syntax
  let [firstElement, ...restElements] = [1, 2, 3, 4, 5];
  console.log(firstElement); 
  console.log(restElements);
  
  // Using Destructuring with Map and Filter
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
  ];
  const youngUsers = users.filter(({ age }) => age < 25);
  console.log(youngUsers);  
  
  // Destructuring Arrays with Mixed Types
  const mixedArray = [1, { prop: 'value' }, 3, { prop2: 'value2' }];
  let [num, obj1, , obj2] = mixedArray;
  console.log(num);      
  console.log(obj1.prop); 
  console.log(obj2.prop2);
  
  // Using manualDestructing function
  const exampleObject = { a: 10, b: 20, c: 30 };
  console.log(manualDestructing(exampleObject)); 
  