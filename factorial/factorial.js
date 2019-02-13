function factorial(n) {
  if (n <= 0) return 0;
  var fact = 1;
  while (n > 0) {
    fact *= n;
    --n;
  }
  return fact;
}

export { factorial };
