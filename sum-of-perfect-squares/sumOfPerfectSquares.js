
function sumOfPerfectSquares(n) {
  var sum = 0;
  var index = Math.round(Math.sqrt(n));
  while (n >= 0) {
    var square = index * index;
    if (square <= n) {
      n -= square;
      sum += index;
    } else {
      index--;
    }
  }
  return sum;
}
export {
  sumOfPerfectSquares,
};
