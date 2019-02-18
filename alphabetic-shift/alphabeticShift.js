
function alphabeticShift(stringToShift) {
  const wordShifter = word => String.fromCharCode(word.charCodeAt() + 1);
  return [...stringToShift].map(wordShifter).join('');
}


export {
  alphabeticShift,
};
