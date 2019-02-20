const handler = {
  get(arr, key) {
    if (key === 'length') {
      return arr.length;
    }
    // if (key < 0) {
    //   return arr[arr.length] - 1;
    // }
    return arr;
  },
};
function negativeIndex(arr) {
  return new Proxy(arr, handler);
}
// console.log(negativeIndex([1, 2, 3, 4]).length);
export {
  negativeIndex,
};
