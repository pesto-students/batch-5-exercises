function squareNumbersArray() {
  var arr = Object.values(arguments);
  const isNumber = arr.reduce(
    (acc, el) => Boolean(typeof el === 'number') && acc,
    true
  );

  if (isNumber) {
    return true;
  } else {
    throw new Error('All the elements of the array are not a Number.');
  }
}
export { squareNumbersArray };
