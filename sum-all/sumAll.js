
function sumAll(arr) {
  var firstNo = arr[0];
  var secondNo = arr[1];
  var allNumbers;
  if (firstNo > secondNo) {
    allNumbers = getAllNumberBetween(secondNo, firstNo);
  }
  else {
    allNumbers = getAllNumberBetween(firstNo, secondNo);
  }
  return allNumbers.reduce((total, num) => (total += num), 0);
}

function getAllNumberBetween(firstNo, lastNo) {
  function getAll(firstNo, lastNo, list) {
    if (firstNo == lastNo) {
      return [...list, lastNo];
    }
    else {
      return getAll(firstNo + 1, lastNo, [...list, firstNo]);
    }
  }
  return getAll(firstNo, lastNo, []);
}

export {
  sumAll,
};
