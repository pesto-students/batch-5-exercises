function largeOfFour(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var numArray = arr[i];
    var maxNum = -Infinity;
    for (var j = 0; j < numArray.length; j++) {
      maxNum = Math.max(maxNum, numArray[j]);
    }
    result.push(maxNum);
  }
  return result;
}

export { largeOfFour };
