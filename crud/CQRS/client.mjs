import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { accountCache } from "./cache.mjs";
import {ACCOUNT_LIST} from "./database.mjs";

console.log("cli");
accountCommand.addAccount("loic","merret");
accountCommand.addAccount("jack","chhc");
accountCommand.addAccount("joe","etr");
const accountList = accountQuery.getAccountList("creationDate");
const account = accountQuery.getAccount(ACCOUNT_LIST[0].id);
console.log(`voici le compte trouve ${account}`);
console.log(accountCache);



console.log(accountList);

const savedAccount = accountCommand.saveAccount(ACCOUNT_LIST[0].id, "jack", "YTCHAN");

console.log(savedAccount);
