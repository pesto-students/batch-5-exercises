
function splitEvery(splitBy, input) {
  if (splitBy <= 0) {
    throw new Error('Invalid split value');
  }
  const result = [];
  for (let i = 0; i < input.length; i += splitBy) {
    if (i < input.length - splitBy) {
      result.push(input.slice(i, i + splitBy));
    } else {
      result.push(input.slice(i));
    }
  }
  return result;
}
export {
  splitEvery,
};
