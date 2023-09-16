function isNegative(x) {
    if(x < 0) {
        return true;
    } else {
        return false;
    }
}

function absoluteValue(x) {
    // should return |x|
    // if x is negative we return x * -1
    if(isNegative(x)){
        return x * -1;
    } else {
        return x
    }
}

var number = 8;

var absolute = absoluteValue(number);

console.log(`The absolute value of ${number} is ${absolute}`)