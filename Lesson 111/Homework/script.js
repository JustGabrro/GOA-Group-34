class Book {
    constructor(title, author, price) {
      this.title = title;
      this.author = author;
      this.price = price;
    }
  
    displayInfo() {
      return `Title: ${this.title}, Author: ${this.author}, Price: $${this.price}`;
    }
  
    calculatePrice(discount) {
      return this.price - (this.price * discount / 100);
    }
  
    getTitle() {
      return this.title;
    }
  }
  
  class Adventure extends Book {
    constructor(title, author, price, adventureLevel, explorationType) {
      super(title, author, price);
      this.adventureLevel = adventureLevel;
      this.explorationType = explorationType;
    }
  
    displayInfo() {
      return `${super.displayInfo()} - Adventure Level: ${this.adventureLevel}, Exploration Type: ${this.explorationType}`;
    }
  
    calculatePrice(discount) {
      let priceAfterDiscount = super.calculatePrice(discount);
      return priceAfterDiscount + (this.adventureLevel * 1.5);
    }
  
    getTheme() {
      return `This book explores themes of courage, exploration, and survival.`;
    }
  }
  
  class Satire extends Book {
    constructor(title, author, price, humorStyle, socialCommentary) {
      super(title, author, price);
      this.humorStyle = humorStyle;
      this.socialCommentary = socialCommentary;
    }
  
    displayInfo() {
      return `${super.displayInfo()} - Humor Style: ${this.humorStyle}, Social Commentary: ${this.socialCommentary}`;
    }
  
    calculatePrice(discount) {
      let priceAfterDiscount = super.calculatePrice(discount);
      return priceAfterDiscount - (this.socialCommentary.length * 0.5);
    }
  
    getComicElements() {
      return `This book contains witty dialogue, caricatures, and absurd situations.`;
    }
  }
  
  class Fantasy extends Book {
    constructor(title, author, price, magicSystem, mythicalCreatures) {
      super(title, author, price);
      this.magicSystem = magicSystem;
      this.mythicalCreatures = mythicalCreatures;
    }
  
    displayInfo() {
      return `${super.displayInfo()} - Magic System: ${this.magicSystem}, Mythical Creatures: ${this.mythicalCreatures}`;
    }
  
    calculatePrice(discount) {
      let priceAfterDiscount = super.calculatePrice(discount);
      return priceAfterDiscount + (this.magicSystem.length * 2);
    }
  
    getMagicSystem() {
      return `The magic system in this book revolves around elemental control and ancient spells.`;
    }
  }
  
