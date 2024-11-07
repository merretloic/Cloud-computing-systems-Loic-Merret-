const {bankDAO} =require('./bankDAO.js');
const {bankTransfer} =require('./bankTransfer.js');

function getBalance(idAccount){
    return bankDAO.retrieveBalance(idAccount);
};
function transferMoney(idAccount,amount){
    return bankTransfer.transfer(idAccount,amount);
}
const bank ={
    getBalance,
    transferMoney,
};
module.exports={bank};