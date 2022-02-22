function basicOperations() {
    let firstOperand = +prompt('Enter first value', 0);
    if (!firstOperand && isNaN(firstOperand)) { // checking for falsy values & correct input
        return console.log('Input error!');
    }
    let secondOperand = +prompt('Enter second value', 0);
    if (!firstOperand && isNaN(secondOperand)) {
        return console.log('Input error!');
    } else {
          return console.log(`Answer: ${firstOperand + secondOperand}, ${firstOperand / secondOperand}.`);
        }
}

console.log(basicOperations());