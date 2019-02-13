function sumAll(range) {
  var start = Math.min(range[0], range[1]);
  var end = Math.max(range[0], range[1]);
  let sum = 0;
  for (var i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

export { sumAll };
