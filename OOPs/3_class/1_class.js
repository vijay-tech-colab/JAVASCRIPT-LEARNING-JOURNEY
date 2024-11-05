//! we can declare this way 

// const BankAccount = class {
//     customerName;
//     accountNumber;
//     balance = 0;

//     constructor(customerName,balance=0) {
//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.balance = balance;
//     }

//     deposit (amount) {
//         this.balance += amount
//     }

//     withdraw  (amount)  {
//         this.balance -= amount
//     }

// }

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

const account1 = new BankAccount('vijay',1000);
const account2 = new BankAccount('ajay',2000);
account1.deposit(4000);
console.log(account1);
console.log(account2);
