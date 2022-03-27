/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
 class TransactionController {
    constructor(service, view) {
      this.service = service;
      this.view = view;

      this.service.bindTransactionChanged(this.onTransactionChanged);
      this.view.bindListener(this.addTransaction);
     
      this.onTransactionChanged(this.service.transactions);
    }
  
    onTransactionChanged = transactions => {
      this.view.updateValues(transactions);
    };

    addTransaction = e =>{
        this.service.addTransaction(e);
    }
  
}