
function sumEvenArgs(...arr) {
  return arr.reduce((acc, el) => (el % 2 === 0 ? acc + el : acc), 0);
}

export {
  sumEvenArgs,
};
