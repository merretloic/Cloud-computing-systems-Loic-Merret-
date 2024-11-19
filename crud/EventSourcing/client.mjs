import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";
import {ACCOUNT_LIST} from "./database.mjs";

console.log("cli");
accountCommand.addAccount("loic","merret");
accountCommand.addAccount("jack","chhc");
accountCommand.addAccount("joe","etr");

