let firstValue  = +prompt('Enter first value' , 0);
let secondValue = +prompt('Enter second value', 0);

if (isNaN(firstValue) || isNaN(secondValue) || !firstValue || !secondValue) {
  console.log('Input error!');
} else if (secondValue < 2 || secondValue > 36) {
    console.log('Second argument must be between 2 and 36. Try again.');
  } else {
      console.log(firstValue.toString(secondValue));
    }