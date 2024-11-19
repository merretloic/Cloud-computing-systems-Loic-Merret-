import { Account } from "./account.mjs";
import { commandDAO } from "./commandDAO.mjs";
import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

function addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName, null);
    commandDAO.insertAccount(account, ACCOUNT_LIST);
    const queryAccount = { lastName, firstName };
    commandDAO.insertAccount(queryAccount, accountSummaryList);
    const name = `${firstName} ${lastName}`; 
    accountCache[account.id] = { name };
}

function getAccount(id){
    return commandDAO.retrieveAccount(id);
}

function saveAccount(id,  lastName, firstName){ 
    let newAccountData = getAccount(id);
    newAccountData.name = `${firstName} ${lastName}`
    return commandDAO.updateAccount(id , newAccountData, ACCOUNT_LIST), commandDAO.updateAccount(id, newAccountData, accountSummaryList), commandDAO.updateAccount(id, newAccountData, accountCache);
}


export const accountCommand = {
    addAccount,
    saveAccount,
}

export default accountCommand