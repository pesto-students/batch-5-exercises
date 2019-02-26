
function doesEndWith(test, input) {
  const testInput = Array.isArray(test) ? test.join('') : test;
  const str = Array.isArray(input) ? input.join('') : input;
  return str.endsWith(testInput);
}

export {
  doesEndWith,
};
