function lowercaseKeys(objectToRestructure) {
  const keys = Object.keys(objectToRestructure);
  const newObject = {};
  keys.map((key) => {
    newObject[key.toLowerCase()] = objectToRestructure[key];
  });
  return newObject;
}

export {
  lowercaseKeys,
};