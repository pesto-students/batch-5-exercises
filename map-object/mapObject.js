function mapObject(...args) {
  var objectToMap = args[0];
  var operatingFunction = args[1];
  var allKeysOfObject = Object.keys(objectToMap);
  allKeysOfObject.map((key) => {
    objectToMap[key] = operatingFunction(objectToMap[key]);
  });
  return objectToMap;
}

export {
  mapObject,
};