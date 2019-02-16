
function getIndexToIns(list, n) {
  var foundIndex = list.length;
  list = list.sort((x, y) => Number(x) - Number(y));
  for (var i = 0; i < list.length; i++) {
    if (list[i] >= n) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
}

export {
  getIndexToIns,
};
