function truthCheck(arr, key) {
  var isTruthy = true;
  arr.forEach(obj => {
    var isKeyTruty = Boolean(obj[key]);
    if (!isKeyTruty) {
      isTruthy = false;
    }
  });
  return isTruthy;
}
export { truthCheck };
