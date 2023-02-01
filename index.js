


let goodCredit=true;
let rateIncome=false;

let eligibleForLoan=goodCredit || rateIncome;

const applicationRefused= !eligibleForLoan;

console.log(eligibleForLoan);
console.log('applicationRefused' , applicationRefused);
