function validString(value) {
  return typeof value === 'string';
}

function getAbbreviateString(string) {
  const words = string.split(' ');
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  const lastWordFirstCharacter = lastWord.split('')[0];
  return `${firstWord} ${lastWordFirstCharacter.toUpperCase()}.`;
}

function abbreviateString(string) {
  if (!validString(string)) {
    throw new Error('Is not a valid string');
  }
  return getAbbreviateString(string);
}

export {
  abbreviateString,
};
