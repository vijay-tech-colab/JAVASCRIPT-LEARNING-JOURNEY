function BankAccount (customerName,balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    
    this.withdraw = (amount) => {
        this.balance -= amount
    }
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount
};

const vijay  = new BankAccount('vijay',1000);
vijay.deposit(5000);
console.log(vijay);

