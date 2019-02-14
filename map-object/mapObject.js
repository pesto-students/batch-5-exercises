function mapObject(obj, cb) {
  var result = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = cb(obj[key]);
    }
  }
  return result;
}

export { mapObject };
