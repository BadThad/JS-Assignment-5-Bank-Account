const account = {
    accountName: "John",
    balance: 1000,
    
    getAccountName() {
        console.log(`Hello ${this.accountName}, welcome to your account.`)
    },
    
    getBalance() {
        console.log(`Your current balance is $${this.balance}`);
    },

    deposit() {

    },

    withdraw() {

    },

    accountError() {
        if () {

        } else {

        }
    },

    exitAccount() {
        console.log(`Bye ${this.accountName}, see you again soon!`)
        return
    },
}

account.getAccountName()
account.getBalance()