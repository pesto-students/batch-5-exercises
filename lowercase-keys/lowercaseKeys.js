
function lowercaseKeys(sampleObject) {
  const objectKeys = Object.keys(sampleObject);
  const objectLowerCaseKeys = {};
  objectKeys.forEach(key => objectLowerCaseKeys[key.toLowerCase()] = sampleObject[key]);
  return objectLowerCaseKeys;
}

export {
  lowercaseKeys,
};
