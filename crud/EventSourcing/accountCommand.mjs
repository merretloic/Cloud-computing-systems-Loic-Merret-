import { Account } from "./account.mjs";
import { commandDAO } from "./commandDAO.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { Event } from "./event.mjs";
import { eventStore } from "./eventStore.mjs";

function addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName, null);
    const event = new Event("account added", account.id, account, null);
    eventStore.addEvent(event);
}

function saveAccount(id,  lastName, firstName){
    const newAccountData = accountQuery.getAccount(id);
    newAccountData.lastName = lastName;
    newAccountData.firstName = firstName;
    console.log("yo", newAccountData);
    return commandDAO.updateAccount(id , newAccountData);
}


export const accountCommand = {
    addAccount,
    saveAccount,
}

export default accountCommand