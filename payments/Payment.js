class Payment {
  constructor(userName, amountToBePaid) {
    this.userName = userName;
    this.amountToBePaid = amountToBePaid;
    this.dateAndTime = new Date().toDateString()
  }

  validate()
  {
    throw new Error("Subclasses must implement validate()");
  }
  paymentProcess(callBack) {
    console.log(`⏳ Processing payment of ₹${this.amountToBePaid} for ${this.userName}...`);

    setTimeout(() => {
      const isSuccessfull = Math.random() > 0.2; // 80% success rate
      callBack(isSuccessfull);
    }, 2000);
  }
}

export default Payment