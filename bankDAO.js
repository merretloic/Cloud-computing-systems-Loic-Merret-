function retrieveBalance() {
    console.log("retrieveBalance");
}

function debitAccount(idAccount,amount){
    console.log(amount,"has been taken from account",idAccount);
    
}

const bankDAO ={
    retrieveBalance,
    debitAccount,
};

module.exports={bankDAO};