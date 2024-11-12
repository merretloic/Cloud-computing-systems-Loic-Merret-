import { accountService } from "./accountService.mjs";
import {ACCOUNT_LIST} from "./database.mjs";

console.log("cli");
accountService.addAccount("loic","merret");
accountService.addAccount("jack","chhc");
accountService.addAccount("joe","etr");
const accountList = accountService.getAccountList("creationDate");

console.log(accountList);

const savedAccount = accountService.saveAccount(ACCOUNT_LIST[0].id, "jack", "YTCHAN");

console.log(savedAccount);
