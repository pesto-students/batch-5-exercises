
function isEven(number) {
  const resultValue = (number & 1);// eslint-disable-line no-bitwise
  if (resultValue === 0) {
    return true;
  }
  return false;
}

export {
  isEven,
};
