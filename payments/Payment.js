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

  paymentProcess()
  {
  console.log(`Processing payment of ₹${this.amountToBePaid} for ${this.userName}...`);

  return new Promise((resolve) => {
    setTimeout(() => {
      const isSuccessful = Math.random() > 0.2;
      resolve(isSuccessful);
    }, 2000);
  });
}

}

// const payment=new Payment('Vinay',123456)
// payment.paymentProcess()

export default Payment;
