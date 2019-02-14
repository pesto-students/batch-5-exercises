function objectDefaults(obj, defaultObj) {
  var objkeys = Object.keys(obj);
  var defaultObjKeys = Object.keys(defaultObj);
  var keys = objkeys.concat(defaultObjKeys);
  var resultObj = {};
  keys.forEach(key => {
    resultObj[key] = obj[key] ? obj[key] : defaultObj[key];
  });
  return resultObj;
}

export { objectDefaults };
