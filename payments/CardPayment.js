    import Payment from './Payment.js'
    class CardPayment extends Payment
    {
        constructor(userName,amountToBePaid,cardNumber,paymentMode)
        {
            super(userName, amountToBePaid) 
            this .cardNumber=cardNumber
            this.paymentMode=paymentMode
        }
        validate()
        {
            return /^\d{16}$/.test(this.cardNumber)
        }
    }

