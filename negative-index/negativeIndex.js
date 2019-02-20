function get(targetArray, index) {
  const reverseSupportedIndex = index + 3;
  if (index >= 0) {
    return targetArray[index];
  }
  return targetArray[reverseSupportedIndex];
  }

const handler = {
  // get: function(targetArray, index) {

  //   return targetArray[index];
  // },
  get: get,
  set: function(targetArray, index, value) {
    if(index >= 0) {
      targetArray[index] = value;
      return true;
    } else {
      const changedIndex = index + 3;
      targetArray[changedIndex] = value;
      return true;
    }
  }
}

function negativeIndex(sampleArray) {
  const proxyArray = new Proxy(sampleArray, handler);
  return proxyArray;
}

export {
  negativeIndex,
};
