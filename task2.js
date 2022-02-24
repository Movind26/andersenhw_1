function calcValues() {
  const firstOperand = +prompt('Enter first value', 0);

  if (!firstOperand || isNaN(firstOperand)) { // checking for falsy values & correct input
    return 'Input error!';
  }

  const secondOperand = +prompt('Enter second value', 0);

  if (!secondOperand || isNaN(secondOperand)) {
    return 'Input error!';
  } else {
      return `Answer: ${firstOperand + secondOperand}, ${firstOperand / secondOperand}.`;
  }

}

calcValues();