
function isEven(...args) {
  const resultValue = (args & 1);// eslint-disable-line no-bitwise
  if (resultValue === 0) {
    return true;
  }
  return false;
}

export {
  isEven,
};
