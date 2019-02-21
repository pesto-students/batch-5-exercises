
function bizarreStringIncrementer(string) {
  const numberPattern = /\d+/g;
  const matchString = /^[A-Za-z]+/;
  const numberToInc = string.match(numberPattern);
  const stringToInc = string.match(matchString);
  return stringToInc[0] + (numberToInc.length > 0 ? parseInt(numberToInc, 10) + 1 : '');
}

export {
  bizarreStringIncrementer,
};
