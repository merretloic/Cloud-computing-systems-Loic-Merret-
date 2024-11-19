import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

function retrieveAccountList(deletedItem){
    if (deletedItem == "creationDate"){
        return ACCOUNT_LIST.map(({ creationDate, ...rest }) => rest);
    }
    else{
        return accountSummaryList;
        
    }
}

function retrieveAccount(searchId) {
    const account = ACCOUNT_LIST.find(({ id }) => id === searchId);
    if (account) {
        return {
            id: account.id,
            name: `${account.firstName} ${account.lastName}`,
            creationDate: account.creationDate,
        };
    }
    return null;
}

export const queryDAO = {
    retrieveAccount,
    retrieveAccountList,
}