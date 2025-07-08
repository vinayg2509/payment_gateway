class TransactionDetails 
{
  constructor(transactionDetails = []) 
  {
    this.transactionDetails = transactionDetails; 
  }

  // Returns number of transactions
  numberOfTransaction() 
  {
    return this.transactionDetails.length;
  }

  // Adds a new transaction to the stack
  pushTransaction(transactionDetail) 
  {
    this.transactionDetails.push(transactionDetail);
    return this.numberOfTransaction();
  }

  // Prints transaction history
  transactionHistory() 
  {
    console.log("Transaction History:");

    const count = this.numberOfTransaction();

    if (count === 0)
    {
      console.log(" No transaction details found.");
    } 
    else 
    {
      let history = "";
      for (let i = 0; i < count; i++) 
      {
        history += JSON.stringify(this.transactionDetails[i]);
        if (i < count - 1) history += ", ";
      }
      console.log(history);
    }
  }
}

export default TransactionDetails;
