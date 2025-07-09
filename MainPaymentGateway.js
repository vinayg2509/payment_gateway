import readline from 'readline';
import CardPayment from './payments/CardPayment.js';
import WalletPayment from './payments/WalletPayment.js';
import UPIPayment from './payments/UPIPayment.js';
import TransactionDetails from './TranscationDetailsDSA/TranscationDetails.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const transactionDetails = new TransactionDetails();

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function handlePayment() {
  const userName = (await ask("👤 Enter user name: "))??"User";
  const amountInput = await ask("Enter amount to be paid: ");
  const amount = parseFloat(amountInput);

  if (isNaN(amount) || amount <= 0) {
    console.log("Invalid amount. Please enter a valid number.\n");
    return handlePayment();
  }

  const paymentType = (await ask("Choose Payment mode (card, wallet, upi): ")).toLowerCase();
  
  let paymentMode;

  switch (paymentType) {
    case "card": {
      const cardNumber = (await ask("Enter 16-digit card number: ")).trim();
      paymentMode = new CardPayment(userName, amount, cardNumber);
      break;
    }
    case "wallet": {
      const walletId = (await ask("Enter Wallet ID (5 characters): ")).trim();
      paymentMode = new WalletPayment(userName, amount, walletId);
      break;
    }
    case "upi": {
      const upiId = (await ask("Enter UPI ID (e.g. name@bank): ")).trim();
      paymentMode = new UPIPayment(userName, amount, upiId);
      break;
    }
    default: {
      console.log("Invalid payment method. Try again.\n");
      return handlePayment(); // Recursively retry
    }
  }

  if (!paymentMode.validate()) {
    console.log("Invalid payment details. Try again.\n");
    return handlePayment(); // Retry
  }

  const success = await paymentMode.paymentProcess();
  if (success) {
    console.log(`Payment successful for ₹${paymentMode.amountToBePaid} via ${paymentMode.paymentMode}`);
    transactionDetails.pushTransaction(`${paymentMode.userName} paid ₹${paymentMode.amountToBePaid} using ${paymentMode.paymentMode} on ${paymentMode.dateAndTime}`);
  } else {
    console.log("Payment failed. Try again.");
  }

  const showHistory = (await ask("\nDo you want to see transaction history? (yes/no): ")).toLowerCase();
  if (showHistory === "yes") {
    transactionDetails.transactionHistory();
  }

 
}

async function runGateway() {
  while (true) {
    await handlePayment(); // handles a single payment

    const again = (await ask("\nDo you want to make another payment? (yes/no): ")).toLowerCase();
    if (again !== "yes") {
      const showHistory = (await ask("Do you want to see transaction history? (yes/no): ")).toLowerCase();
      if (showHistory === "yes") {
        transactionDetails.transactionHistory();
      }
      rl.close(); // only close when fully done
      break;
    }
  }
}

runGateway();

