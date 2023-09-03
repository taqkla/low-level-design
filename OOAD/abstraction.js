const account_details = {
    holder_name: "Aryan",
    account_number: "2300123876254",
    ifsc_code: "SBI23001",
    balance: Number(3210)
}

class bankBalance {
    constructor(account_details) {
        this._account_details = account_details;
    }

    _addBalance(amount) {
        this._account_details[balance] += Number(amount);
    }

    _deductBalance(amount) {
        // some checks
        this._account_details[balance] -= Number(amount);
    }

    checkBankBalance() {
        return this._account_details[balance];
    }

    pay(amount) {
        // whole logic of pay
    }
}

class Payment {
    constructor(bankBalance) {
        this._bankBalance = bankBalance;
    }

    pay() {
        this._bankBalance.pay(amount);
    }
}