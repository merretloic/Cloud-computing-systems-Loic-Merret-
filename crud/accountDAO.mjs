import { ACCOUNT_LIST } from "./database.mjs";

function insertAccount(account){
    ACCOUNT_LIST.push(account);
    console.log(ACCOUNT_LIST);
    
}

function retrieveAccountList(deletedItem){
    if (deletedItem){
        return ACCOUNT_LIST.map(({ deletedItem, ...rest }) => rest);
    }
    else{
        return ACCOUNT_LIST;
        
    }
}

export const accountDAO = {
  insertAccount,
  retrieveAccountList,
  updateAccount(account) {},
  retrieveAccount(id) {},
};

export default accountDAO;