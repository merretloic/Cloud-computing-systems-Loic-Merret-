const {bankDAO} =require('./bankDAO.js');
const {bankTransfer} =require('./bankTransfer.js');

function getBalance(idAccount){
    return bankDAO.retrieveBalance(idAccount);
};
function transferMoney(idAccount,amount){
    const transferResult = bankTransfer.transfer(idAccount, amount);
    bankDAO.debitAccount(idAccount, amount);
    return transferResult;
}
const bank ={
    getBalance,
    transferMoney,
};
module.exports={bank};