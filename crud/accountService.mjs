import { Account } from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";

function addAccount(lastName, firstName) {
    console.log("in addAccount");
    const account = new Account(null, lastName, firstName, null);
    accountDAO.insertAccount(account);
}

function getAccountList(deletedItem){
    return accountDAO.retrieveAccountList(deletedItem);
}

function getAccount(id){
    return accountDAO.retrieveAccount(id);
}

function saveAccount(id,  lastName, firstName){
    const newAccountData = getAccount(id);
    newAccountData.lastName = lastName;
    newAccountData.firstName = firstName;
    console.log("yo", newAccountData);
    return accountDAO.updateAccount(id , newAccountData);
}

export const accountService = {
    addAccount,
    getAccountList,
    saveAccount,
    getAccount,
  };

export default accountService;


