import accountDAO from "../accountDAO.mjs";
import { ACCOUNT_LIST } from "./database.mjs";
import { queryDAO } from "./queryDAO.mjs";


function getAccountList(deletedItem){
    return queryDAO.retrieveAccountList(deletedItem);
}

function getAccount(id){
    return queryDAO.retrieveAccount(id);
}



export const accountQuery = {
    getAccountList,
    getAccount,
}

export default accountQuery