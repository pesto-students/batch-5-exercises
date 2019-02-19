function isValidArr(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    var isValid = true;
    arr.map((item) => {
      if (typeof item != 'number') {
        isValid = false;
      }
    });
    return isValid;
  }
  return false;
}

function arrayAddition(arr1, arr2) {
  if (!isValidArr(arr1)) {
    throw Error("Not a Valid input");
  }
  return arr1.reduce((addedArr, item, index) => {
    arr2[index] = arr2[index] + item;
    return arr2;
  }, arr2);
}

export {
  arrayAddition,
};
