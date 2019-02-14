
function mapObject(sampleObject) {
  const mappedObject = {};
  for (const key in sampleObject) {
    if ({}.hasOwnProperty.call(sampleObject, key)) {
      mappedObject[key] = sampleObject[key] ** 2;
    }
  }
  return mappedObject;
}

export {
  mapObject,
};
