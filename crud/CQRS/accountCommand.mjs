import { Account } from "./account.mjs";
import { commandDAO } from "./commandDAO.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

function addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName, null);
    commandDAO.insertAccount(account, ACCOUNT_LIST);
    const queryAccount = { lastName, firstName };
    commandDAO.insertAccount(queryAccount, accountSummaryList)
}

function saveAccount(id,  lastName, firstName){
    const newAccountData = accountQuery.getAccount(id);
    newAccountData.lastName = lastName;
    newAccountData.firstName = firstName;
    const queryAccount = { lastName, firstName };
    console.log("yo", newAccountData);
    return commandDAO.updateAccount(id , newAccountData, ACCOUNT_LIST), commandDAO.updateAccount(id, queryAccount, accountSummaryList);
}


export const accountCommand = {
    addAccount,
    saveAccount,
}

export default accountCommand