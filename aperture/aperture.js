
function aperture(window, elements) {
  if (window > elements.length) {
    return [];
  }
  const tupleArray = [];
  let startPoint = 0;
  let endPoint = window;
  while (endPoint <= elements.length) {
    tupleArray.push(elements.slice(startPoint, endPoint));
    startPoint += 1;
    endPoint += 1;
  }
  return tupleArray;
}

export {
  aperture,
};
