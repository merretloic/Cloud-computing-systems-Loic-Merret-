
function addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName, null);
    accountDAO.insertAccount(account);
}

function saveAccount(id,  lastName, firstName){
    const newAccountData = getAccount(id);
    newAccountData.lastName = lastName;
    newAccountData.firstName = firstName;
    console.log("yo", newAccountData);
    return accountDAO.updateAccount(id , newAccountData);
}


export const accountCommand = {
    addAccount,
    saveAccount,
}

export default accountCommand