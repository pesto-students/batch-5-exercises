
function arrayAddition(arrayOne, arrayTwo) {
  const addedArray = [];
  for (const element in arrayOne) {
    addedArray.push(arrayOne[element] + arrayTwo[element]);
  }
  return addedArray;
}

export {
  arrayAddition,
};
