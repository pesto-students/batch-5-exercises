function getIndexToIns(...args) {
  var arrayToSort = args[0].sort()
  var indexToInsert = 0;
  for (var i in arrayToSort) {
    if (i < args[1]) {
      indexToInsert++;
    } else {
      break;
    }
  }
  return arrayToSort;
}

export {
  getIndexToIns,
};