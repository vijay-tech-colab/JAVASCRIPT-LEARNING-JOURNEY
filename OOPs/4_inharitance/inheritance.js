// DRY = Do not repeat yourself 

//! using object constructer function 

// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount
// };
// BankAccount.prototype.withdraw = function (amount) {
//     this.balance -= amount
// }
// const acc = new BankAccount('vijay', 1000);
// console.log(acc);



// function CurrentAccount (customerName,balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//     this.transactionLimit = 5000;
// }
// CurrentAccount.prototype.deposit = function (amount) {
//     this.balance += amount
// };
// CurrentAccount.prototype.withdraw = function (amount) { 
//     this.balance -= amount
// }
// CurrentAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('take personal loan ', +amount);
// }
// CurrentAccount.prototype.takeBussinessLoan = function (amount) {
//     console.log('take bussiness loan ', +amount);
// }
// const current = new CurrentAccount('vijay',1000);
// console.log(current);



// function SavingAccount (customerName,balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//     this.transactionLimit = 1000;
// }

// SavingAccount.prototype.deposit = function (amount) {
//     this.balance += amount
// };
// SavingAccount.prototype.withdraw = function (amount) { 
//     this.balance -= amount
// }
// SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('take personal loan ', +amount);
// }

// const saving = new SavingAccount('vijay',1000);
// console.log(saving);



// ====== in this approch we are following repeat yourself  but we should dont repeat yourself approach =====

function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount
};
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount
}
const acc = new BankAccount('vijay', 1000);
console.log(acc);



// inherit BankAccount to CurrentAccount
function CurrentAccount(customerName, balance = 0) {
    BankAccount.call(this,customerName,balance);
    this.transactionLimit = 5000;
}
CurrentAccount.prototype = Object.create(BankAccount.prototype);
CurrentAccount.prototype.takeBussinessLoan = function (amount) {
    this.balance += amount
};
const current = new CurrentAccount('vijay',1000);
console.log(current);  


// inherit BankAccount to SavingAccount
function SavingAccount (customerName,balance = 0) {
    BankAccount.call(this,customerName,balance);
    this.transactionLimit = 1000;
}
SavingAccount.prototype = Object.create(BankAccount.prototype);
SavingAccount.prototype.takePersonalLoan = function (amount) {
console.log('take personal loan', +amount);
}

const saving = new SavingAccount('vijay',9000);
saving.takePersonalLoan(400);
saving.deposit(4000);
console.log(saving);

