import { accountCache } from "./cache.mjs";
import { ACCOUNT_LIST } from "./database.mjs";

function insertAccount(account, database){   
    database.push(account);
    console.log(ACCOUNT_LIST);
    
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
    updateAccount
}

