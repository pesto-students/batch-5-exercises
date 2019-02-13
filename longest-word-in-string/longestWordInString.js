
function longestWordInString(string) {
  const arrayOfWords = string.split(' ');
  const lenOfWordsinArray = arrayOfWords.map(word => word.length);
  const lenOfBiggestWord = Math.max(...lenOfWordsinArray);
  return lenOfBiggestWord;
}

export {
  longestWordInString,
};
