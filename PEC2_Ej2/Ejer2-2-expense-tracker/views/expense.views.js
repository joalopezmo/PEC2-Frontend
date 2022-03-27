/**
 * @class View
 *
 * Visual representation of the model.
 */
 class TransactionView {
    constructor(){

        this.balance = this.getElement('balance');
        this.money_plus = this.getElement('money-plus');
        this.money_minus = this.getElement('money-minus');
        this.list = this.getElement('list');
        this.form = this.getElement('form');
        this.text = this.getElement('text');
        this.amount = this.getElement('amount');

    }

    getElement(selector) {
        const element = document.getElementById(selector);
    
        return element;
      }


    init() {
        list.innerHTML = '';
      
        transactions.forEach(addTransactionDOM);
        updateValues();
    }

    bindListener(){
        this.form.addEventListener('submit', addTransaction);
    }


   
}