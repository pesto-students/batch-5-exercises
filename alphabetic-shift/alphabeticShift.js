function shiftCharacter(character) {
  const charCodeForAlphabet = character.charCodeAt(0);
  return String.fromCharCode(charCodeForAlphabet + 1);
}

function alphabeticShift(inputString) {
  const alphabets = inputString.split('');
  const shiftedString = alphabets.map(shiftCharacter);
  return shiftedString.join('');
}

export {
  alphabeticShift,
};
