function alienAlphabet(words) {
  var uniqueAlphabets = [];
  var concatenatedWords = words.join('').split('');
  concatenatedWords.forEach(char =>
    !uniqueAlphabets.includes(char) ? uniqueAlphabets.push(char) : null
  );
  return uniqueAlphabets;
}

export { alienAlphabet };
