function arraySumTest(...args) {
  return args.reduce((prevVal, currentVal) => prevVal + currentVal, 0);
};

export {
  arraySumTest,
};