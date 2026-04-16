const convertToCelsius = function(farenheit) {
    let celsius = (farenheit - 32) * (5/9);
    return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(c) {
  let f = c * (9/5) + 32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
