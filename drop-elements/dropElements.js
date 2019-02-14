
function dropElements(sampleArray, argFunction) {
  const filteredArray = sampleArray.filter(argFunction);
  return filteredArray;
}

export {
  dropElements,
};
