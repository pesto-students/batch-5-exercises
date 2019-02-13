function repeatStringNumTimes(str, times) {
  var result = '';
  if (times > 0) {
    for (var i = 0; i < times; i++) {
      result += str;
    }
  }
  return result;
}

export { repeatStringNumTimes };
