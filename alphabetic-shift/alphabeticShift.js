
const shiftCharByOne = ch => String.fromCharCode(ch.charCodeAt(0) + 1);
function alphabeticShift(str) {
  const charArr = str.split('');
  return charArr.reduce((acc, ch) => acc + shiftCharByOne(ch), '');
}

export {
  alphabeticShift,
};
