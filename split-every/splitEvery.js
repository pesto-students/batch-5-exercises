
function splitEvery(splitValue, sampleArray) {
  if (splitValue < 1) {
    throw new Error();
  }
  const splittedArray = [];
  for (let index = 0; index < sampleArray.length; index += splitValue) {
    const chunkOfArray = sampleArray.slice(index, index + splitValue);
    splittedArray.push(chunkOfArray);
  }
  return splittedArray;
}

export {
  splitEvery,
};
