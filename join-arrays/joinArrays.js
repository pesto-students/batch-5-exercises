
function joinArrays(...args) {
  const sampleArray = [];
  sampleArray.push(...args);
  const joinedArray = sampleArray.reduce((a, b) => a.concat(b), []);
  return joinedArray;
}

export {
  joinArrays,
};
