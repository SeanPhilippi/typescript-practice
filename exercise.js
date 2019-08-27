"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Sean",
    bankAccount: bankAccount,
    hobbies: ['coding', 'film', 'gym']
};
myself.bankAccount.deposit(3000);
console.log('myself', myself);
