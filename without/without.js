function checkIfNaN(valueOne, valueTwo) {
  if (valueOne.toString() === 'NaN') {
    return !(Number.isNaN(valueOne) && Number.isNaN(valueTwo));
  }
  return false;
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
  return Object.is(valueTwo, valueOne) || checkIfNaN(valueOne, valueTwo);
}


function doesExist(value, numbersToBeRemoved) {
  const index = numbersToBeRemoved.findIndex(element => checkEquality(value, element));
  return index > -1;
}

function without(numbersToBeRemoved, numbers) {
  return numbers.filter(value => !doesExist(value, numbersToBeRemoved));
}

export { without };
