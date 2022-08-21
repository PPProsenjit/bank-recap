/*
1.add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById 
3. get previoue withdraw amount by using  getTextElementValueById
4.calculate new Withdraw Total and set the value 
4-5.set new Withdraw total  by using setTextElementById function
*/
document.getElementById('btn-withdraw').addEventListener('click',function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getTextElementValueById('withdraw-total');
    const TotalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    setTextElementValueById('withdraw-total',TotalWithdrawAmount);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total',newBalanceTotal);


})