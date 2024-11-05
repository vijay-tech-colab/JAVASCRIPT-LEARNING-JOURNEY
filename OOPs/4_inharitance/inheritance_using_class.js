class BankAccount {
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName,balance=0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit (amount) {
        this.balance += amount
    }

    withdraw  (amount)  {
        this.balance -= amount
    }

}

class SavingAccount extends BankAccount {
    transactionLimit = 5000;
    constructor (customerName,balance=0) {
        super(customerName,balance);
        this.transactionLimit = 5000;
    }
    takeBussinessLoan (amount) {
        console.log('take bussiness loan', +amount);
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 10000;
    constructor (customerName,balance=0) {
        super(customerName,balance);
        this.transactionLimit = 10000;
    }
    takePersonalLoan (amount) {
        console.log('take personal loan', +amount);
    }
}

const account1 = new CurrentAccount('ajay kumar',1000);
account1.deposit(15000);
console.log(account1);
