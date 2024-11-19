import { Account } from "./account.mjs";
import { commandDAO } from "./commandDAO.mjs";
import { accountQuery } from "./accountQuery.mjs";
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

function saveAccount(id,  lastName, firstName){ 
    let newAccountData = accountQuery.getAccount(id);
    newAccountData = `${firstName} ${lastName}`
    return commandDAO.updateAccount(id , newAccountData, ACCOUNT_LIST), commandDAO.updateAccount(id, newAccountData, accountSummaryList), commandDAO.updateAccount(id, newAccountData, accountCache);
}


export const accountCommand = {
    addAccount,
    saveAccount,
}

export default accountCommand