
function diffArray(arr1, arr2) {
  var diffLists = arr1.reduce((resultArr, item) => {
    if (arr2.indexOf(item) > -1) {
      resultArr[1] = resultArr[1].filter((elm) => (elm != item));
      return resultArr;
    }
    else {
      resultArr[0] = [...resultArr[0], item];
      return resultArr;
    }
  }, [[], arr2]);
  var combineUniqOfBothLists = [...diffLists[0], ...diffLists[1]];
  return combineUniqOfBothLists;
}

export {
  diffArray,
};
