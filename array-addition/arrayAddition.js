
function arrayAddition(arr1, arr2) {
  if (!arr1.length || !arr2.length) {
    throw new Error();
  }
  const result = [];
  const length = Math.min(arr1.length, arr2.length);
  let i = 0;
  while (i < length) {
    if (typeof arr1[i] === 'string' || typeof arr2[i] === 'string') {
      throw new Error();
    }
    result.push(arr1[i] + arr2[i]);
    i += 1;
  }
  const remainingArr = arr1.length > arr2.length ? arr1.slice(i) : arr2.slice(i);
  return result.concat(remainingArr);
}

export {
  arrayAddition,
};
