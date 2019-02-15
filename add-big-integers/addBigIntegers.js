function addBigIntegers(numberData) {
  numberData = numberData.split('\n');
  var no = numberData[0];
  var numbers = numberData.slice(1);
  return numbers.reduce((prevValue, currentValue) => {
    return String(parseFloat(prevValue) + parseFloat(currentValue));
  }, 0);
}

export {
  addBigIntegers,
};