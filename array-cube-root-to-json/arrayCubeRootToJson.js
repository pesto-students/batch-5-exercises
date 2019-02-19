
function arrayCubeRootToJson(sampleArray) {
  const typecheck = sampleArray.every((val, i, arr) => typeof val === typeof arr[0]);
  if ((Array.isArray(sampleArray) && typecheck)) {
    const cubeRootArray = sampleArray.map(element => Math.cbrt(Number(element)));
    const cubeRootObject = new Map();
    for (const i of [...Array(cubeRootArray.length).keys()]) {
      cubeRootObject[sampleArray[i]] = cubeRootArray[i];
    }
    return cubeRootObject;
  }
  throw new Error();
}

export {
  arrayCubeRootToJson,
};
