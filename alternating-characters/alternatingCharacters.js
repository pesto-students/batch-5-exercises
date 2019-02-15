function alternatingCharacters(strList) {
  var countAdjacentDuplicate = str => {
    var charList = str.split("");
    var accumulatedObj = charList.reduce(
      (accObj, char, charIndex) => {
        if (accObj.prev === char) {
          accObj.count += 1;
        }
        accObj.prev = char;
        return accObj;
      },
      { count: 0, prev: undefined }
    );
    return accumulatedObj.count;
  };

  return strList.map(str => countAdjacentDuplicate(str));
}

export { alternatingCharacters };
