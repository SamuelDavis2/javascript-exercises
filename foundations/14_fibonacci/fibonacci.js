const fibonacci = function(num) {
    let fibArr = [0, 1];
    if (num < 0) {
        return 'OOPS';
    } else {
        for (let i = 0; i < num; i++) {
            fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
        }
        return fibArr.at(num);
    }
};

// Do not edit below this line
module.exports = fibonacci;
