    import Payment from './Payment.js'
    class WalletPayment extends Payment
    {
        constructor(userName,amountToBePaid,walletId)
        {
            super(userName, amountToBePaid) 
            this .walletId=walletId
            this.paymentMode="wallet"
        }
        validate()
        {
            return this.walletId.length===5
        }
    }
export default WalletPayment
