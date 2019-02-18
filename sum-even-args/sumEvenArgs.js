
function sumEvenArgs(...args) {
  const sampleArray = [];
  sampleArray.push(...args);
  const evenArray = sampleArray.filter(element => (element % 2) === 0);
  const sumEvenArray = evenArray.reduce((a, b) => a + b, 0);
  return sumEvenArray;
}

export {
  sumEvenArgs,
};
