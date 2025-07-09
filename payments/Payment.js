class Payment {
  constructor(userName, amountToBePaid) {
    this.userName = userName;
    this.amountToBePaid = amountToBePaid;
    this.dateAndTime = new Date().toDateString(); // Records payment date
  }

  // Method to be implemented by subclasses
  validate() {
    throw new Error("Subclasses must implement validate()");
  }

  // Simulates asynchronous payment processing
  paymentProcess(callback) {
    console.log(`⏳ Processing payment of ₹${this.amountToBePaid} for ${this.userName}...`);

    setTimeout(() => {
      const isSuccessful = Math.random() > 0.2; // 80% success rate
      callback(isSuccessful);
    }, 2000);
  }
}

export default Payment;
