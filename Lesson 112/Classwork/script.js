class Animal {
    constructor(name, scientificName, habitat, diet, lifespan) {
      this.name = name;
      this.scientificName = scientificName;
      this.habitat = habitat;
      this.diet = diet;
      this.lifespan = lifespan;
      this.endangeredStatus = false;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Scientific Name: ${this.scientificName}`);
      console.log(`Habitat: ${this.habitat}`);
      console.log(`Diet: ${this.diet}`);
      console.log(`Lifespan: ${this.lifespan} years`);
    }
  
    getDescription() {
      return `${this.name} is a ${this.diet} animal found in ${this.habitat}.`;
    }
  
    calculateLifespan() {
      return `The average lifespan of ${this.name} is ${this.lifespan} years.`;
    }
  }
  
  class Mammal extends Animal {
    constructor(name, scientificName, habitat, diet, lifespan, furType) {
      super(name, scientificName, habitat, diet, lifespan);
      this.furType = furType;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Fur Type: ${this.furType}`);
    }
  
    giveBirth() {
      console.log(`${this.name} gives live birth.`);
    }
  
    nurseYoung() {
      console.log(`${this.name} nurses its young.`);
    }
  }
  
  class Bird extends Animal {
    constructor(name, scientificName, habitat, diet, lifespan, featherType) {
      super(name, scientificName, habitat, diet, lifespan);
      this.featherType = featherType;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Feather Type: ${this.featherType}`);
    }
  
    layEggs() {
      console.log(`${this.name} lays eggs.`);
    }
  
    migrate() {
      console.log(`${this.name} migrates seasonally.`);
    }
  }
  
  class Reptile extends Animal {
    constructor(name, scientificName, habitat, diet, lifespan, scaleType) {
      super(name, scientificName, habitat, diet, lifespan);
      this.scaleType = scaleType;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Scale Type: ${this.scaleType}`);
    }
  
    shedSkin() {
      console.log(`${this.name} sheds its skin.`);
    }
  
    baskInSun() {
      console.log(`${this.name} basks in the sun to regulate its temperature.`);
    }
  }
  
  class Fish extends Animal {
    constructor(name, scientificName, habitat, diet, lifespan, finType) {
      super(name, scientificName, habitat, diet, lifespan);
      this.finType = finType;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Fin Type: ${this.finType}`);
    }
  
    swim() {
      console.log(`${this.name} swims in water.`);
    }
  
    breatheUnderwater() {
      console.log(`${this.name} can breathe underwater.`);
    }
  }
  
  class AnimalDatabase {
    constructor() {
      this.animals = [];
    }
  
    addAnimal(animal) {
      this.animals.push(animal);
    }
  
    searchAnimal(name) {
      const result = this.animals.filter(animal => animal.name.toLowerCase().includes(name.toLowerCase()));
      if (result.length > 0) {
        result.forEach(animal => animal.displayInfo());
      } else {
        console.log("Animal not found.");
      }
    }
  
    showAllAnimals() {
      this.animals.forEach(animal => animal.displayInfo());
    }
  }
  
  