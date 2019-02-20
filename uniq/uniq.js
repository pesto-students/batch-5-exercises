
function uniq(sampleArray) {
  const sampleArraySet = new Set(sampleArray);
  return [...sampleArraySet.values()];
}

export {
  uniq,
};
