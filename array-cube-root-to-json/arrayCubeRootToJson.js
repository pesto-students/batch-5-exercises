
function arrayCubeRootToJson(elements) {
  const calculateCubeRoot = (x) => {
    const result = Math.cbrt(x);
    // eslint-disable-next-line use-isnan
    if (result === NaN) {
      throw Error('Invalid Arguments');
    }
    return result;
  };
  // eslint-disable-next-line array-callback-return
  const obj = {};
  // eslint-disable-next-line array-callback-return
  elements.map((curr) => {
    obj[curr] = calculateCubeRoot(curr);
  });
  return obj;
}

export {
  arrayCubeRootToJson,
};
