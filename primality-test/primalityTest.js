
function primalityTest(number) {
  if (number < 2) {
    return false;
  }
  for(var i = 2; i < number; i++) {
    if (number % i === 0) {
      if (number === i) {
        return true;
      }
      return false;
    }
  }
  return true;
}

export {
  primalityTest,
};
