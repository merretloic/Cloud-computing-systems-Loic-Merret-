import { Account } from "./account.mjs";
import { commandDAO } from "./commandDAO.mjs";
import { Event } from "./event.mjs";
import { eventStore } from "./eventStore.mjs";

function addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName, null);
    const event = new Event("account added", account.id, account, null);
    eventStore.addEvent(event);
}

function getAccount(id){
    return eventStore.retrieveAccountByEvent(id);
}

function saveAccount(id,  lastName, firstName){
    const newAccountData = getAccount(id);
    console.log(newAccountData);
    
    newAccountData.name = `${firstName} ${lastName}`;
    console.log("yo", newAccountData);
    return commandDAO.updateAccount(id , newAccountData);
}


export const accountCommand = {
    addAccount,
    saveAccount,
    getAccount
}

export default accountCommand