
function steamrollArray() {
  var result = [];
  var arr = Object.values(arguments);
  return flattenArray(arr);
}
function flattenArray(arr) {
  var result = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else {
      result.push(element);
    }
  });
  return result;
}
export {
  steamrollArray,
};
