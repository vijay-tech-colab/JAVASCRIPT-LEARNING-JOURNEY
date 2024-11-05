function BankAccount (customerName,balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.deposit = function (amount) {
        this.balance += amount
    }
    this.withdraw = (amount) => {
        this.balance -= amount
    }
}

// const vijayAcc = new BankAccount ('vijay',100);
// const johnDoe = new BankAccount('johnDoe',1000);
// johnDoe.deposit(5000);
// johnDoe.withdraw(2000);
// console.log(johnDoe)

/* ====================================DOM MANUPULATION========================== */
const accountForm = document.getElementById('accountForm');
const customerName = document.getElementById('customerName');
const balance = document.getElementById('balance');
const depositForm = document.getElementById('depositForm');
const accountNumber = document.getElementById('accountNumber');
const amount = document.getElementById('amount');
const accounts = [];

// ! create account 
accountForm.addEventListener('submit',(event) => {
    event.preventDefault();
    // console.log(customerName.value);
    // console.log(balance.value);
    const account = new BankAccount (customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
    customerName.value = "";
    balance.value = ""
});

// ! deposit amount 
depositForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const acc = accounts.find((account) => account.accountNumber === +accountNumber.value);
    acc.deposit(+amount.value);
    console.log(accounts);
    accountNumber.value = "";
    amount.value = ""
});






