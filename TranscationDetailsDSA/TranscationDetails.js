class TransactionDetails {
  constructor(transactions = []) {
    this.transactions = transactions; 
  }

  // Returns the number of transactions
  numberOfTransactions() {
    return this.transactions.length;
  }

  // Adds a new transaction to the stack
  pushTransaction(transaction) {
    this.transactions.push(transaction);
    return this.numberOfTransactions();
  }

  // Prints the transaction history
  transactionHistory() {
    console.log("\nTransaction History:");

    const count = this.numberOfTransactions();

    if (count === 0) {
      console.log("No transaction details found.");
    } else {
      for (let i = 0; i < count; i++) {
        console.log(`${i + 1}. ${this.transactions[i]}`);
      }
    }
  }
}

export default TransactionDetails;
