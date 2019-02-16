function isPrime(n) {
  var flag = true;
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
function sumPrimes(n) {
  var sum = 0;
  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

export {
  sumPrimes,
};
