const {bankDAO} =require('./bankDAO.js');

function transfer(accountId, amount){
    console.log("transfering ",amount,"$ to account", accountId );
}

const bankTransfer ={
    transfer,
};

module.exports = {bankTransfer};