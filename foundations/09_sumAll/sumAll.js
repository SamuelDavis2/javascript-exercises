const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 === 'string' || typeof num2 === 'string' || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    } else {
        let arr = [];
        for (let i = num1; i <= num2; i++) {
         arr.push(i);
        }
        for (let i = num2; i <= num1; i++) {
            arr.push(i);
        }
        let sum = arr.reduce((total, item) => total + item, 0);
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;