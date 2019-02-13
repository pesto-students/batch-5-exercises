function largeOfFour(ArrList) {
  var subArrMax = [];
  for (var i = 0; i < 4; i++) {
    var max = Math.max.apply(null, ArrList[i]);
    subArrMax.push(max);
  }
  return subArrMax;
}

export { largeOfFour };
