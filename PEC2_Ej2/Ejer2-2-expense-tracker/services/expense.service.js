/**
 * @class Service
 *
 * Manages the data of the application.
 */
 class TransactionService {
    constructor() {
        this.transactions = (JSON.parse(localStorage.getItem('transactions')) || []).map(
          transaction => new Transaction(transaction)
        );
    }

    bindTransactionChanged(callback){
        this.onTransactionsChanged = callback;
    }

    updateLocalStorage(transactions) {
        this.onTransactionsChanged(transactions);
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    addTransaction(e) {
        e.preventDefault();
      
        if (text.value.trim() === '' || amount.value.trim() === '') {
          alert('Please add a text and amount');
        } else {
          const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
          };
      
          transactions.push(transaction);
      
          addTransactionDOM(transaction);
      
          updateValues();
      
          updateLocalStorage();
      
          text.value = '';
          amount.value = '';
        }
    }
    // Add transactions to DOM list
    addTransactionDOM(transaction) {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';
  
    const item = document.createElement('li');
  
    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  
    item.innerHTML = `
      ${transaction.text} <span>${sign}${Math.abs(
      transaction.amount
    )}</span> <button class="delete-btn" onclick="removeTransaction(${
      transaction.id
    })">x</button>
    `;
  
    list.appendChild(item);
  }
  
  // Update the balance, income and expense
    updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);
  
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
  
    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
  }
  
  // Remove transaction by ID
    removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
  
    updateLocalStorage();
  
    init();
  }
    
  
   
  }