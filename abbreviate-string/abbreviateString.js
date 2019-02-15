function abbreviateString(stringToAbrivate) {
  const splitKeywords = stringToAbrivate.split(' ');
  const abrivatedString = `${splitKeywords[0]} ${splitKeywords[splitKeywords.length - 1].toUpperCase().charAt(0)}.`;
  return abrivatedString;
}

export {
  abbreviateString,
};