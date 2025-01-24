// Animal Class
class Animal {
    constructor(name, species, age) {
      this.name = name;
      this.species = species;
      this.age = age;
    }
  
    makeSound() {
      return `${this.name} says hello in its own way!`;
    }
  }
  
  // Car Class
  class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    getDetails() {
      return `This car is a ${this.year} ${this.brand} ${this.model}.`;
    }
  }
  
  // Person Class
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  // Animals
  const leo = new Animal("Leo", "Lion", 4);
  const polly = new Animal("Polly", "Parrot", 2);
  const bella = new Animal("Bella", "Dog", 3);
  
  // Cars
  const toyota = new Car("Toyota", "Camry", 2019);
  const ford = new Car("Ford", "F-150", 2022);
  const tesla = new Car("Tesla", "Model S", 2021);
  
  // People
  const nika = new Person("nika", "vasadze", 29);
  const dexter = new Person("dexter", "morgan", 26);
  const gabriel = new Person("gabriel", "jakhveladze", 31);


console.log(leo.makeSound());
console.log(polly.makeSound());
console.log(bella.makeSound());
  
console.log(toyota.getDetails());
console.log(ford.getDetails());
console.log(tesla.getDetails());
  
console.log(nika.getName());
console.log(jane.getName());
console.log(alice.getName());
  