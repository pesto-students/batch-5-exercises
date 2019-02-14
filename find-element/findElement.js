
function findElement(sampleArray, argFunction) {
  const filteredArray = sampleArray.filter(argFunction);
  const firstElement = filteredArray[0];
  return firstElement;
}

export {
  findElement,
};
