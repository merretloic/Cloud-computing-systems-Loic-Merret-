import { accountCache } from "./cache.mjs";
import { ACCOUNT_LIST } from "./database.mjs";

function insertAccount(account, database){   
    database.push(account);
    console.log(ACCOUNT_LIST);
    
}

function retrieveAccount(searchId) {
    const account = ACCOUNT_LIST.find(({ id }) => id === searchId);
    if (account) {
       return {
            id: account.id,
            name: accountCache[searchId].name,
            creationDate: account.creationDate,
        };
    }
    return null;
}

function updateAccount(searchId, newAccountData, database){
    if (database == accountCache){
        accountCache[searchId] = newAccountData;
        return accountCache;
    }
    else{
        return database.map(({ id }) => {
            if (id === searchId) {
                return { id: { ...id, ...newAccountData } };
            }
            return {newAccountData};
        });
    } 
}

export const commandDAO = {
    insertAccount,
    updateAccount,
    retrieveAccount
}

