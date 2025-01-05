// 1
const greet = (name = "მაყურებელი") => `გამარჯობა, ${name}!`;

console.log(greet("გაბრიელ"));
console.log(greet()); 

// 2
const sum = (a = 0, b = 5) => a + b;

console.log(sum(3, 7));
console.log(sum()); 

// 3
const max = (a = 10, b = 20) => (a > b ? a : b);

console.log(max(15, 8)); 
console.log(max()); 

// 4
const multiply = (a = 1, b = 2, c = 3) => a * b * c;

console.log(multiply(4, 5, 6)); 
console.log(multiply()); 

// 5
const calculatePrice = (price, tax = price * 0.05) => price + tax;

console.log(calculatePrice(100, 10)); 
console.log(calculatePrice(200));

// 6
const repeatText = (text, times = 3) => text.repeat(times);

console.log(repeatText("გამარჯობა", 2)); 
console.log(repeatText("გამარჯობა"));

// 7
const compareNumbers = (a = 5, b = 10) => a > b;

console.log(compareNumbers(8, 3));
console.log(compareNumbers());

// 8
const profile = ({ name = "მაია", age = 25, city = "თბილისი" } = {}) => 
    `გამარჯობა, მე ვარ ${name}, ${age} წლის და ვცხოვრობ ${city}-ში.`;
  
  console.log(profile({ name: "გაბრიელი", age: 30, city: "თბილის" })); 
  console.log(profile()); 

// 9
const numberSeries = (start = 1, end = 10, step = 1) => {
    const result = [];
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
    return result;
  };
  
  console.log(numberSeries(1, 5, 2)); 
  console.log(numberSeries());

// 10
const mergeObjects = (...objects) => Object.assign({}, ...objects);

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3 })); 
console.log(mergeObjects());