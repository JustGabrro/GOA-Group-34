class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName || '';
      this.lastName = lastName || '';
      this.age = age || 0;
    }
  
    get initials() {
      return `${this.firstName[0].toUpperCase()}${this.lastName[0].toUpperCase()}`;
    }
  
    get age_in_months() {
      return this.age * 12;
    }
  
    get is_retired() {
      return this.age >= 60;
    }
  }
  
  class Product {
    constructor(name, price) {
      this.name = name || '';
      this.price = price || 0;
    }
  
    get formatted_price() {
      return `$${this.price.toFixed(2)}`;
    }
  
    get discount_price() {
      return `$${(this.price * 0.9).toFixed(2)}`;
    }
  }
  