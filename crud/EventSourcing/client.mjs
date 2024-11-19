import { accountCommand } from "./accountCommand.mjs";
import { eventList } from "./eventStore.mjs";

console.log("cli");
accountCommand.addAccount("loic","merret");
accountCommand.addAccount("jack","chhc");
accountCommand.addAccount("joe","etr");

accountCommand.saveAccount(eventList[0].id, "loic merret");

console.log(accountCommand.getAccount(eventList[0].id));
