class BankAccount {
    // Private field for balance
    #balance;
  
    constructor(initialBalance = 0) {
      if (initialBalance < 0) {
        throw new Error("Initial balance cannot be negative.");
      }
      this.#balance = initialBalance;
    }
  
    // Getter for balance
    getBalance() {
      return this.#balance;
    }
  
    // Setter for balance 
    deposit(amount) {
      if (amount < 0) {
        throw new Error("Deposit amount must be positive.");
      }
      this.#balance += amount;
    }
  }
  
  class ReadOnlyAccount {
    // Private field for account holder name
    #holderName;
  
    constructor(holderName) {
      this.#holderName = holderName;
    }
  
    // Getter for holder name 
    getHolderName() {
      return this.#holderName;
    }
  }
  
  try {
    const account1 = new BankAccount(500);
    console.log(account1.getBalance()); 
  
    account1.deposit(200);
    console.log(account1.getBalance()); 
  
    const readOnlyAccount = new ReadOnlyAccount('Gabriel Jakhveladze');
    console.log(readOnlyAccount.getHolderName()); 
        
  } catch (error) {
    console.log(error.message);
  }
  