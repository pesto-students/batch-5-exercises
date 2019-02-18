
function sumEvenArgs(...args) {
  return args.reduce((acc, currentValue) => acc + (currentValue % 2 === 0 ? currentValue : 0), 0);
}

export {
  sumEvenArgs,
};
