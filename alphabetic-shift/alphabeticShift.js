
const getShiftedChar = (char) => {
  const asciiCode = char.charCodeAt(0);
  const nextAsciiCode = asciiCode + 1;
  const nextChar = String.fromCharCode(nextAsciiCode);
  return nextChar;
}

function alphabeticShift(str) {
  return str.split('').reduce((shiftedStr, char) => shiftedStr += getShiftedChar(char), '');
}



export {
  alphabeticShift,
};
