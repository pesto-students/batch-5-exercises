
function primalityTest(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2 || n === 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i <= Math.ceil(Math.sqrt(n))) {
    if (n % i === 0) {
      return false;
    }
    i += 2;
  }
  return true;
}

export {
  primalityTest,
};
