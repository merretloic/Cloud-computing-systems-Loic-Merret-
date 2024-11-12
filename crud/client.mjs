import { accountService } from "./accountService.mjs";
import {accountDAO} from "./accountDAO.mjs";

console.log("cli");
accountService.addAccount("loic","merret");
const accountList = accountService.getAccountList();

console.log(accountList);
