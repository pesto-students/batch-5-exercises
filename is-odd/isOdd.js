
function isOdd(number) {
  const resultValue = (number & 1);// eslint-disable-line no-bitwise
  if (resultValue === 0) {
    return false;
  }
  return true;
}

export {
  isOdd,
};
