const isEven = n => n % 2 === 0;
const shiftChar = (ch, i) => {
  const charCode = ch.charCodeAt(0);
  if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
    let newCharCode;
    if (isEven(i)) {
      newCharCode = charCode + 4;
    } else {
      newCharCode = charCode + 6;
    }
    if ((charCode >= 97 && charCode <= 122) && newCharCode > 122) {
      newCharCode = (newCharCode - 122) + 96;
    }
    if ((charCode >= 65 && charCode <= 90) && newCharCode > 90) {
      newCharCode = (newCharCode - 90) + 64;
    }
    return String.fromCharCode(newCharCode);
  }
  return ch;
};
function substitutionCipher(str) {
  const strWithoutSpaces = str.split('').join('');
  return strWithoutSpaces.split('').reduce((acc, ch, i) => acc + shiftChar(ch, i), '');
}

export {
  substitutionCipher,
};
