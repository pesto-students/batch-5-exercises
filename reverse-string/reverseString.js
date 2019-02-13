function reverseString(str) {
  var reverse = '';
  for (var i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }
  return reverse;
}

export { reverseString };
