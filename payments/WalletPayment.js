import Payment from './Payment.js';

class WalletPayment extends Payment {
  constructor(userName, amountToBePaid, walletId) {
    super(userName, amountToBePaid);
    this.walletId = walletId;
    this.paymentMode = "wallet";
  }

  validate() {
    // Ensures walletId is exactly 5 alphanumeric characters
    return /^[a-zA-Z0-9]{5}$/.test(this.walletId);
  }
}

export default WalletPayment;
