
function union(arrayOne, arrayTwo) {
  const concatArray = new Set([...arrayOne, ...arrayTwo]);
  return Array.from(concatArray);
}

export {
  union,
};
