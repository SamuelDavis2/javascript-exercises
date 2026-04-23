const palindromes = function (word) {
    const arr = word.split("")
    const cleanArr = arr.filter(val => !/\W/.test(val));
    const uncased = cleanArr.map(letter => letter.toLowerCase());
    const cleanWord = uncased.join("");
    const reversed = uncased.reverse().join("")
    if (cleanWord === reversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
