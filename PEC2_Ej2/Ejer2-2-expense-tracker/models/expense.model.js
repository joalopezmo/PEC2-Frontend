/**
 * @class Model
 *
 * Manages the data of the application.
 */

 class Transaction {
    constructor({ text, amount, complete } = { complete: false }) {
      this.id = this.uuidv4();
      this.text = text;
      this.amount = amount;
      this.complete = complete;
    }
  
    generateID() {
        return Math.floor(Math.random() * 100000000);
      }
  }
  