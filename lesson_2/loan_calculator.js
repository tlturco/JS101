// 1. ask the user for the loan amount
// 2. ask the user for the APR
// 3. convert the APR into a monthly rate
// 4. ask the user for the loan duration
// 5. calculate the monthly payment
// 6. print the payment amount


const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function isInvalidNumber(num) {
  return num.trimStart() === '' ||
  Number(num) < 0 ||
  Number.isNaN(Number(num));
}
prompt("Welcome to the Teresa Loan Calculator 3000!");
while (true) {

  prompt("-------------------------------------------");

  prompt("What is the loan amount?");
  //ask for the loan amount and remove the "$"
  let loanAmount = readline.question().replace('$', '');


  while (isInvalidNumber(loanAmount)) {
    prompt("Hmmm.. that doesn't look like a valid number. Please enter a new value.");
    loanAmount = readline.question().replace('$', '');
  }

  prompt("What is the Annual Percentage Rate (APR)? Please enter this as a percent value (e.g. 3%)");
  //ask for the APR and remove the "%"
  let apr = readline.question().replace('%', '');

  while (isInvalidNumber(apr)) {
    prompt("Hmmm.. that doesn't look like a valid percentage rate. Please enter a new value.");
    apr = readline.question().replace('%', '');
  }


  prompt("What is the loan duration? Please enter this in years.");
  let loanDurationYears = readline.question();

  while (isInvalidNumber(loanDurationYears)) {
    prompt("Hmmm.. that doesn't look like a valid time period. Please enter a new value.");
    loanDurationYears = readline.question();
  }

  //convert everything from a string to a number in the right format
  loanAmount = Number(loanAmount);
  let monthlyInterestRate = apr / 12 / 100;
  let loanDurationMonths = loanDurationYears * 12;


  // eslint-disable-next-line max-len
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

  let totalValueOfPayments = (monthlyPayment * loanDurationMonths).toFixed(2);
  let totalInterest = (totalValueOfPayments - loanAmount).toFixed(2);
  monthlyPayment = monthlyPayment.toFixed(2);
  monthlyInterestRate = monthlyInterestRate.toFixed(2);

  prompt(`Loan Duration = ${loanDurationMonths} months.`);
  prompt(`Monthly rate = ${monthlyInterestRate}%`);
  prompt(`Monthly Payment = $${monthlyPayment}`);
  prompt(`Total value of ${loanDurationMonths} payments = $${totalValueOfPayments}`);
  prompt(`Total Interest = $${totalInterest}`);

  prompt("Another calculation?");
  let again = readline.question().toLowerCase();

  while (again[0] !== 'n' && again[0] !== 'y') {
    prompt("Please answer 'y' or 'n'");
    again = readline.question().toLowerCase();
  }

  if (again[0] !== 'y') break;

}