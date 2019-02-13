
function reverseString(str) {
  if (str.length <= 1) return str;
  else {
    var LastCar = str[str.length - 1];
    var restStr = str.slice(0, str.length - 1);
    return LastCar + reverseString(restStr);
  }
}

export {
  reverseString,
};
