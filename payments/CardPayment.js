import Payment from './Payment.js';

class CardPayment extends Payment {
  constructor(userName, amountToBePaid, cardNumber) {
    super(userName, amountToBePaid);
    this.cardNumber = cardNumber;
    this.paymentMode = "card"; // Set internally
  }

  validate() {
    return /^\d{16}$/.test(this.cardNumber); // Must be 16 digits
  }
}

export default CardPayment;
