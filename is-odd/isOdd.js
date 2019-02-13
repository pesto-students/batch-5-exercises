function isOdd(number) {
  var isNumOdd = false;
  for (var i = 1; i <= number; i++) {
    isNumOdd = !isNumOdd;
  }
  return isNumOdd;
}

export { isOdd };
