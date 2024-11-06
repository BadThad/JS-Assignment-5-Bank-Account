const account = {
    accountName: "John",
    balance: 1000,
    
    getAccountName() {
        alert(`Hello ${this.accountName}, welcome to your account.`);
        this.atm();
    },
    
    getBalance() {
        alert(`Your current balance is $${this.balance}`);
        this.atm();
    },

    deposit() {
        const deposit = parseFloat(prompt("How much would you like to deposit?"));
        if (isNaN(deposit) || deposit === '' || deposit < 0) {
            alert(`Error: please enter a valid amount.`);
            this.deposit();
        } else {
            this.balance += deposit;
            this.getBalance();
        }
    },

    withdraw() {
        const withdraw = parseFloat(prompt("How much would you like to withdraw?"));
        if (isNaN(withdraw) || withdraw === '' || withdraw < 0) {
            alert(`Error: please enter a valid amount.`);
            this.withdraw();
        } else {
            this.balance -= withdraw;
            this.getBalance();
        }
    },

    error() {
        alert("Error: please pick a number between 1 - 5.");
    },

    exitAccount() {
        const confirm_exit = confirm("Exiting program.");
        if (confirm_exit) {
            window.close();
        } else {
            this.atm();
        }
    },

    atm() {
        const message = parseFloat (
            prompt(
                "Select a number 1.) Get account name, 2.) See balance, 3.) Make a deposit, 4.) Make a withdrawal, 5.) Exit"
            )
        );
    
        switch (message) {
            case 1: this.getAccountName();
            this.atm;
            case 2: this.getBalance();
            this.atm;
            case 3: this.deposit();
            this.atm;
            case 4: this.withdraw();
            this.atm;
            case 5: this.exitAccount();
        }
    },
}

account.atm();