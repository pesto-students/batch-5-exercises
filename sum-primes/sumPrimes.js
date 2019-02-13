
function sumPrimes(num) {
  return getPrimes(num).reduce((sum, number) => (sum += number), 0);
}

function getPrimes(num) {
  var primeList = [];
  for (let i = 2; i <= num; i++)
    if (isPrime(i)) {
      primeList = [...primeList, i]
    }
  return primeList;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}

export {
  sumPrimes,
};
