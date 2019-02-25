const isEven = n => n % 2;
const isAlphaCapital = code => (code >= 97 && code <= 122);
const isAlphaSmall = code => (code >= 65 && code <= 90);
const shiftBy = (chCode) => {
  let result;
  if (isAlphaCapital(chCode)) {
    result = isEven(chCode - 96);
  } else if (isAlphaSmall(chCode)) {
    result = isEven(chCode - 64);
  }
  return result ? 4 : 6;
};
const shiftChar = (ch) => {
  const charCode = ch.charCodeAt(0);
  if (isAlphaCapital(charCode) || isAlphaSmall(charCode)) {
    let newCharCode;
    newCharCode = charCode + shiftBy(charCode);

    if (isAlphaCapital(charCode) && newCharCode > 122) {
      newCharCode = (newCharCode - 122) + 96;
    }
    if (isAlphaSmall(charCode) && newCharCode > 90) {
      newCharCode = (newCharCode - 90) + 64;
    }
    return String.fromCharCode(newCharCode);
  }
  return ch;
};
function substitutionCipher(str) {
  return str.split('').reduce((acc, ch) => acc + shiftChar(ch), '');
}
// console.log(substitutionCipher('Aa Bb Cc Xx Yy Zz !?.\n'));
// Ee Hh Gg Dd Cc Ff !?.\n
export {
  substitutionCipher,
};
