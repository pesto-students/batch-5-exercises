function isValidArr(arr) {
  let isValid = true;
  if (Array.isArray(arr) && arr.length > 0) {
    arr.map((item) => {
      if (isNaN(parseInt(item)) && item != Infinity) {
        isValid = false;
      }
    });
    return isValid;
  }
  return false;
}

function arrayCubeRootToJson(arr) {
  if (!isValidArr(arr)) {
    throw Error("Not valid Input");
  }
  return arr.reduce((cubeRootObj, num) => ({ ...cubeRootObj, [String(num)]: Math.cbrt(num) })
    , {})
}

export {
  arrayCubeRootToJson,
};
