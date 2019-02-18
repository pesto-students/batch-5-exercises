
function tripleAndFilter(sampleArray) {
  const tripleAndFilteredArray = sampleArray.map(x => x * 3).filter(x => x % 5 === 0);
  return tripleAndFilteredArray;
}

export {
  tripleAndFilter,
};
