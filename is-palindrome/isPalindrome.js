function isPalindrome(str) {
  str = String(str);
  var filteredStr = '';
  for (var i = 0; i < str.length; i++) {
    var char = str[i] + '';
    var pattern = /[a-zA-Z0-9]/;
    if (pattern.test(char)) {
      filteredStr += char;
    }
  }

  var filterStrReverse = filteredStr
    .split('')
    .reverse()
    .join('');
  return filterStrReverse.toLowerCase() === filteredStr.toLowerCase();
}

export { isPalindrome };
