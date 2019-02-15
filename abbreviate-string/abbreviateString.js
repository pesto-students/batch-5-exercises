function abbreviateString(str) {
  if (typeof str != "string") {
    throw Error("Must be a string");
  } else {
    var strList = str.split(" ");
    var firstWord = strList[0];
    var firstCharAtLastWord = strList[strList.length - 1][0];
    return firstWord + " " + firstCharAtLastWord.toUpperCase() + ".";
  }
}

export { abbreviateString };
