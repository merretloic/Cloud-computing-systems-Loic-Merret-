import { ACCOUNT_LIST } from "./database.mjs";

function insertAccount(account){
    ACCOUNT_LIST.push(account);
    console.log(ACCOUNT_LIST);
    
}

function retrieveAccountList(deletedItem){
    if (deletedItem == "creationDate"){
        return ACCOUNT_LIST.map(({ creationDate, ...rest }) => rest);
    }
    else{
        return ACCOUNT_LIST;
        
    }
}

function retrieveAccount(searchId){
    return ACCOUNT_LIST.find(({ id }) => id == searchId);
}

function updateAccount(searchId, newAccountData){
    return ACCOUNT_LIST.map(({ id }) => {
        if (id === searchId) {
            return { id: { ...id, ...newAccountData } };
        }
        return {newAccountData};
    });
}

export const accountDAO = {
  insertAccount,
  retrieveAccountList,
  updateAccount,
  retrieveAccount,
};

export default accountDAO;