
function telephoneCheck(phoneNo) {
  var patternList = [
    /^1\s\([\d]{3}\)\s[\d]{3}-[\d]{4}$/,
    /^[\d]{3}\s+[\d]{3}\s+[\d]{4}$/,
    /^[\d]{3}-[\d]{3}-[\d]{4}$/,
    /^\([\d]{3}\)\s*[\d]{3}-[\d]{4}$/,
    /^[\d]{10}$/,
  ]
  for (var i = 0; i < patternList.length; i++) {
    if (patternList[i].test(phoneNo)) {
      return true;
    }
  }
  return false;
}
export {
  telephoneCheck,
};
