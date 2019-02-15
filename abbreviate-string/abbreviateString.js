function abbreviateString(input) {
  var isString = typeof input === 'string' && /[A-Z]/.test(input);
  if (isString) {
    var str = input.split(' ');
    var firstWord = str[0];
    var lastWord = str[str.length - 1];
    var abbreviatedString = firstWord + ' ' + lastWord[0].toUpperCase() + '.';
    return abbreviatedString;
  } else {
    throw new Error('The input must be a string.');
  }
}

export { abbreviateString };
