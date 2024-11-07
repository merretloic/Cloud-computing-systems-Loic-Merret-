const {bankDAO} = require ('./bankDAO.js');
const {bank}= require ('./bank.js');
const {bankTransfer} = require('./bankTransfer.js');


test("Should be called but not executed", () => {
    const idAccount=123;
    const expectedBalance=100;
    
    jest.spyOn(bankDAO, "retrieveBalance").mockReturnValue(expectedBalance);
    
    const balance = bank.getBalance(idAccount);

    expect(jest.spyOn(bankDAO, "retrieveBalance")).toHaveBeenCalledWith(idAccount);
    
    expect(balance).toBe(expectedBalance);
});

test("transfer money to account", () => {
    const idAccount=123;
    const expectedAmount=1000;
    
    jest.spyOn(bankTransfer, "transfer").mockReturnValue(expectedAmount);
    
    const amount = bank.transferMoney(idAccount,expectedAmount);

    expect(jest.spyOn(bankTransfer, "transfer")).toHaveBeenCalledWith(idAccount,expectedAmount);
    
    expect(amount).toBe(expectedAmount);
});

