const account = {
    accountName: "John",
    balance: 1000,
    
    getAccountName: function() {
        alert(`Hello ${this.accountName}, welcome to your account.`);
        atm();
    },
    
    getBalance: function() {
        alert(`Your current balance is $${this.balance}`);
        atm();
    },

    deposit: function() {
        const deposit = parseFloat(prompt("How much would you like to deposit?"));
        if (isNaN(deposit) || deposit === '' || deposit < 0) {
                alert(`Error: please enter a valid amount.`);
                deposit();
        } else {
            balance += deposit;
            this.getBalance();
        }
    },

    withdraw: function() {
        const withdraw = parseFloat(prompt("How much would you like to withdraw?"));
        if (isNaN(withdraw) || withdraw === '' || withdraw < 0) {
                alert(`Error: please enter a valid amount.`);
                withdraw();
        } else {
            balance -= withdraw;
            this.getBalance();
        }
    },

    error: function() {
        alert("Error: please pick a number between 1 - 5.");
    },

    exitAccount: function() {
        const confirm_exit = confirm("Exiting program.");
        if (confirm_exit) {
            window.close();
        } else {
            atm();
        }
    },

    atm: function() {
        const message = parseFloat (
            prompt(
                "Select a number 1.) Get account name, 2.) See balance, 3.) Make a deposit, 4.) Make a withdrawal, 5.) Exit"
            )
        );
    
        switch (message) {
            case 1: getAccountName();
            case 2: getBalance();
            case 3: deposit();
            case 4: withdraw();
            case 5: exit();
        }
    }
}