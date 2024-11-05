class BankAccount {
    customerName;
    accountNumber;
    #balance = 0; // private property we can't access outside of class we can access only inside class

    constructor(customerName,balance=0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit (amount) {
        this.#balance += amount
    }

    withdraw  (amount)  {
        this.#balance -= amount
    }
    
    // setter function 
    set balance (amount){
        if(isNaN(amount)){
            throw new Error('Invailid user input !');
        }
        this.#balance = amount
    }
    // getter function
    get balance () {
        console.log(this.#balance);
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

const acc = new BankAccount('vijay kumar', 1000);
// console.log(acc.#balance); 
acc.balance
console.log(acc);

