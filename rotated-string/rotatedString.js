
function rotatedString(str1, str2) {
  var compareStr = str1;
  for (var i = 0; i < str2.length - 1; i++) {
    var firstChar = compareStr[0];
    compareStr = compareStr.slice(1) + firstChar;
    if (compareStr === str2) {
      return true;
    }
  }
  return false;
}

export {
  rotatedString,
};
