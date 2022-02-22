let firstValue  = +prompt('Enter first value' , 0);
let secondValue = +prompt('Enter second value', 0);

if (isNaN(firstValue) || isNaN(secondValue) || !firstValue || !secondValue) {
    console.log('Input error!');
} else {
    console.log(firstValue.toString(secondValue));
}