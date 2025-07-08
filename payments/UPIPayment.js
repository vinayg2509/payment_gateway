import Payment from './Payment.js';

class UPIPayment extends Payment {
  constructor(userName, amountToBePaid, upiId) {
    super(userName, amountToBePaid);
    this.upiId = upiId;
    this.paymentMode = "upi"; // Consistent with 'card', 'wallet'
  }

  validate() {
    // UPI ID format: example@bank (alphanumeric + dots/hyphens + @ + provider)
    return /^[\w.-]+@[\w]+$/.test(this.upiId);
  }
}

export default UPIPayment;
