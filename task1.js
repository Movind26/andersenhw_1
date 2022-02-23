const firstValue  = +prompt('Enter first value' , 0);
const secondValue = +prompt('Enter second value', 0);

if (isNaN(firstValue) || isNaN(secondValue) || !firstValue || !secondValue) {
  'Input error!';
} else if (secondValue < 2 || secondValue > 36) {
  'Second argument must be between 2 and 36. Try again.';
} else {
  firstValue.toString(secondValue);
}