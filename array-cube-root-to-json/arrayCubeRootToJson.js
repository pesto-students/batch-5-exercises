
function arrayCubeRootToJson(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Invalid input');
  }
  const notNumbers = numbers.filter(el => typeof el !== 'number');
  if (notNumbers.length > 0) {
    throw new Error('Invalid input');
  }
  return numbers.reduce((acc, num) => {
    const result = acc;
    result[num] = Math.cbrt(num);
    return result;
  }, {});
}

export {
  arrayCubeRootToJson,
};
