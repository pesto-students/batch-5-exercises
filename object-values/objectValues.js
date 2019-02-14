function objectValues(obj) {
  var result = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}

export { objectValues };
