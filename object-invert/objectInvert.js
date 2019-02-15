function objectInvert(objectToInvert) {
  var keys = Object.keys(objectToInvert);
  var newObj = {}
  keys.forEach((key) => {
    newObj[objectToInvert[key]] = key;
  });
  return newObj;
}

export {
  objectInvert,
};