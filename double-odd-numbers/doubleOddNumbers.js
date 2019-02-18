
function doubleOddNumbers(sampleArray) {
  const arrayOddNumbers = sampleArray.filter(element => (element % 2) === 1);
  const doubleArrayOddNumbers = arrayOddNumbers.map(element => element * 2);
  return doubleArrayOddNumbers;
}

export {
  doubleOddNumbers,
};
