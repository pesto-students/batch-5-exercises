
const isEmpty = arr => arr.length === 0;
const isString = item => typeof item === 'string';
const zip = (_array1, _array2) => {
  const biggerArray = _array1.length > _array2.length ? _array1 : _array2;
  const smallerArray = _array1.length > _array2.length ? _array2 : _array1;
  return biggerArray.map((value, index) => [value, smallerArray[index]]);
};
function arrayAddition(elements1, elements2) {
  if (isEmpty(elements1) || isEmpty(elements2)) {
    throw Error('Array can not be empty');
  }

  if (elements1.some(isString) || elements2.some(isString)) {
    throw Error('Array element can not be string');
  }
  const sumArray = zip(elements1, elements2)
    .map(item => item[0] + (item[1] === undefined ? 0 : item[1]));
  return sumArray;
}

export {
  arrayAddition,
};
