function checkIfNaN(valueOne, valueTwo) {
  if (valueOne && valueOne.toString() === 'NaN') {
    return !(Number.isNaN(valueOne) && Number.isNaN(valueTwo));
  }
  return false;
}

function checkIfUndefinedAndNullOrNaN(valueOne, valueTwo) {
  const bothUndefined = (valueOne === undefined && valueTwo === undefined);
  const bothNull = (valueOne === null && valueTwo === null);
  return bothUndefined || bothNull || checkIfNaN(valueOne, valueTwo);
}

function checkEquality(valueOne, valueTwo) {
  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) {
      return false;
    }
    const arrayOne = valueOne.toString().split(',');
    const arrayTwo = valueTwo.toString().split(',');
    return arrayOne.filter((value, index) => value === arrayTwo[index]).length;
  }
  return Object.is(valueTwo, valueOne) || checkIfUndefinedAndNullOrNaN(valueOne, valueTwo);
}

function getCurrentValue(array, elementToSearch) {
  const hasElement = array.findIndex(element => checkEquality(element, elementToSearch)) > -1;
  if (!hasElement) {
    return [elementToSearch];
  }
  return [];
}

function uniq(list) {
  return list.reduce((acc, currentValue) => [...acc, ...getCurrentValue(acc, currentValue)], []);
}

export {
  uniq,
};
