import { accountCache } from "./cache.mjs";
import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

function retrieveAccountList(deletedItem){
    if (deletedItem == "creationDate"){
        return accountSummaryList.map(({ creationDate, ...rest }) => rest);
    }
    else{
        return accountSummaryList;
        
    }
}

function retrieveAccount(searchId) {
    const account = accountSummaryList.find(({ id }) => id === searchId);
    if (account) {
       return {
            id: account.id,
            name: accountCache[searchId].name,
            creationDate: account.creationDate,
        };
    }
    return null;
}

export const queryDAO = {
    retrieveAccount,
    retrieveAccountList,
}