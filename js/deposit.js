
document.getElementById('btn-deposit').addEventListener('click',function () {
    /*
    1. get the element by id
    2. get the value from the elemeny
    3. convert string value to a number
    */
   // deposit send in function 
   const newDepositAmount =  getInputFieldValueById('deposit-field');
    //get previoue deposit amount 
    const previousDepostTotal = getTextElementValueById('deposit-total');
    //calculate the total deposit amount
    const newDepositTotal = newDepositAmount + previousDepostTotal;
    //set deposit ammount to deposit Field
    setTextElementValueById('deposit-total',newDepositTotal);
    // get previous balance 
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);

})