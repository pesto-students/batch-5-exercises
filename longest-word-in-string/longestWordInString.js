function longestWordInString(sentense) {
  var wordList = sentense.split(" ");
  var lenList = wordList.map(function(word) {
    return word.length;
  });
  return Math.max.apply(null, lenList);
}

export { longestWordInString };
