import { Account } from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";

function addAccount(lastName, firstName) {
    console.log("in addAccount");
    const account = new Account(null, lastName, firstName, null);
    accountDAO.insertAccount(account);
}

function getAccountList(){
    return accountDAO.retrieveAccountList();
}

export const accountService = {
    addAccount,
    getAccountList,
    saveAccount(id, lastName, firstName) {},
    getAccount(id) {},
  };

export default accountService;


