function chunkArrayInGroups(...args) {
  var elementsToGroup = args[0];
  var sizeOfGroup = args[1];
  elementsToGroup = elementsToGroup.reduce((accumulator, curruentValue, index) => {
    var pushToIndex = accumulator.length > 0 ? accumulator.length - 1 : 0;

    if (accumulator[pushToIndex] && accumulator[pushToIndex].length && accumulator[pushToIndex].length < sizeOfGroup) {
      accumulator[pushToIndex].concat([curruentValue]);
    } else {
      accumulator[pushToIndex] = [].concat([curruentValue]);
    }
    return accumulator;
  }, []);
  return elementsToGroup;
}

export {
  chunkArrayInGroups,
};