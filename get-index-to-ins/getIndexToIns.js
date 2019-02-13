
function getIndexToIns(array, value) {
  array.sort((a, b) => a - b);
  let i = 0;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] >= value) {
      return i;
    }
  }
  return i;
}

export {
  getIndexToIns,
};
