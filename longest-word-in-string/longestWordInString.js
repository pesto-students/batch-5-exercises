function longestWordInString(str) {
  var longest = 0;
  str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    longest = Math.max(longest, str[i].length);
  }
  return longest;
}

export { longestWordInString };
