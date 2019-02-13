
function reverseString(string) {
  const array = string.split('');
  let i = 0;
  while (i < array.length / 2) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
    i += 1;
  }
  return array.join('');
}

export {
  reverseString,
};
