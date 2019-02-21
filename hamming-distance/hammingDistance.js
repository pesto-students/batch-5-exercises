
function hammingDistance(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    throw new Error('String length must be equal');
  }
  const differenceArray = stringOne.split('').map((value, index) => (value === stringTwo[index] ? 0 : 1));
  return differenceArray.reduce((acc, value) => acc + value, 0);
}

export {
  hammingDistance,
};
