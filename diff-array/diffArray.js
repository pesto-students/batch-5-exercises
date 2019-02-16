
function diffArray(arr1, arr2) {
  var diffArr = [];
  var onlyInArr1 = arr1.filter(el => !arr2.includes(el));
  var onlyInArr2 = arr2.filter(el => !arr1.includes(el));
  return onlyInArr1.concat(onlyInArr2);
}

export {
  diffArray,
};
