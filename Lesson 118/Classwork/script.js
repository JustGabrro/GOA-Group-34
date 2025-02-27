const crypto = require('crypto');

class Card {
    #pinHash;
    #pinAttempts = 0;
    #maxPinAttempts = 3;
    #locked = false;

    constructor(cardNumber, pin, balance = 0) {
        if (!/^[0-9]{16}$/.test(cardNumber)) {
            throw new Error("Invalid card number. Must be 16 digits.");
        }
        if (!/^[0-9]{4}$/.test(pin)) {
            throw new Error("Invalid PIN. Must be 4 digits.");
        }
        
        this.cardNumber = cardNumber;
        this.#pinHash = this.#hashPin(pin);
        this.balance = balance;
        this.factsAboutYou = [];
    }

    #hashPin(pin) {
        return crypto.createHash('sha256').update(pin).digest('hex');
    }

    #verifyPin(pin) {
        return this.#hashPin(pin) === this.#pinHash;
    }

    checkBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        this.balance += amount;
        return `Deposited $${amount}. New balance: $${this.balance}`;
    }

    withdraw(amount, enteredPin) {
        if (this.#locked) {
            throw new Error("Card is locked due to too many incorrect PIN attempts.");
        }
        if (!this.#verifyPin(enteredPin)) {
            this.#pinAttempts++;
            if (this.#pinAttempts >= this.#maxPinAttempts) {
                this.#locked = true;
            }
            throw new Error("Incorrect PIN. Card may be locked after too many attempts.");
        }
        this.#pinAttempts = 0;
        if (amount <= 0 || amount > this.balance) {
            throw new Error("Invalid withdrawal amount or insufficient funds.");
        }
        this.balance -= amount;
        return `Withdrew $${amount}. Remaining balance: $${this.balance}`;
    }

    updatePin(oldPin, newPin) {
        if (this.#locked) {
            throw new Error("Card is locked. Cannot update PIN.");
        }
        if (!this.#verifyPin(oldPin)) {
            throw new Error("Incorrect old PIN.");
        }
        if (!/^[0-9]{4}$/.test(newPin)) {
            throw new Error("New PIN must be 4 digits.");
        }
        this.#pinHash = this.#hashPin(newPin);
        return "PIN updated successfully.";
    }

    addFact(fact) {
        if (typeof fact !== 'string' || !fact.trim()) {
            throw new Error("Invalid fact. Must be a non-empty string.");
        }
        this.factsAboutYou.push(fact);
    }

    getFacts() {
        return this.factsAboutYou;
    }
}

module.exports = Card;
