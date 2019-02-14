function objectInvert(obj) {
  var objKeys = Object.keys(obj);
  var result = {};
  objKeys.forEach(key => {
    result[obj[key]] = key;
  });
  return result;
}

export { objectInvert };
