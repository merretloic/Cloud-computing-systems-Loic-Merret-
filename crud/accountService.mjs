import { Account } from "account.mjs";
import { accountDAO } from "accountDAO.mjs";

function addAccount(lastName, firstName) {

    Account = new Account(lastName, firstName);
    accountDAO.insertAccount(Account);
}


export const accountService = {
    addAccount(lastName, firstName) {},
    getAccountList() {},
    saveAccount(id, lastName, firstName) {},
    getAccount(id) {},
  };

export default accountService;


