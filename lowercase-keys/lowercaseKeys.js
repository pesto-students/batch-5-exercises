function lowercaseKeys(obj) {
  var result = {};
  var keys = Object.keys(obj);
  keys.forEach(key => (result[key.toLowerCase()] = obj[key]));
  return result;
}

export { lowercaseKeys };
