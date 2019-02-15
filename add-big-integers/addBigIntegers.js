function addBigIntegers(str) {
  str = str.split(' ');
  var totalNumbers = str[0];
  var numbers = str.slice(1);
  return numbers.reduce((sum, num) => sum + Number(num), 0);
}

export { addBigIntegers };
