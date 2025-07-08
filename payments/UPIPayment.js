    import Payment from './Payment.js'
    class UPIPayment extends Payment
    {
        constructor(userName,amountToBePaid,upiId)
        {
            super(userName, amountToBePaid) 
            this .upiId=upiId
            this.paymentMode="UPI"
        }
    
        validate() 
        {
            return /^[\w.-]+@[\w]+$/.test(this.upiId);
        }

    }
