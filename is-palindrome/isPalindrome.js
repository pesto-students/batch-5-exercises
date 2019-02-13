
function isPalindrome(pattern) {
  var patternStr = String(pattern);
  var alphaNumericRegex = /[^a-z0-9]/gi;
  var filteredAlphaNumericPattern = patternStr.replace(alphaNumericRegex, '').toLowerCase();
  var reversePatternList = Array.prototype.reverse.call(filteredAlphaNumericPattern.split(''));
  var reverseStr = reversePatternList.join('');
  return filteredAlphaNumericPattern == reverseStr;
}

export {
  isPalindrome,
};
