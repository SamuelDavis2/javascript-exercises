const reverseString = function(str) {
    let arr = Array.from(str);
    arr.reverse();
    str = arr.join('');
    return str;
};

// Do not edit below this line
module.exports = reverseString;
