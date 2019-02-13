
function rotatedString(str1, str2) {
  if (str1.length != str2.length || str1 == str2) {
    return false;
  }
  return str1.split('').reduce((isRotated, char) => str2.split('').includes(char), false);
}

export {
  rotatedString,
};
