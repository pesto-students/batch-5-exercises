
function factorial(number) {
  let value = number;
  if (value === 0) {
    return 1;
  }
  let result = value;
  while (value > 1) {
    value--;// eslint-disable-line no-plusplus
    result *= value;
  }
  return result;
}

export {
  factorial,
};
