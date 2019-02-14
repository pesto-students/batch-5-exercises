
function objectKeys(sampleObject) {
  const listObjectKeys = [];
  for (const key in sampleObject) {
    if ({}.hasOwnProperty.call(sampleObject, key)) {
      listObjectKeys.push(key);
    }
  }
  return listObjectKeys;
}

export {
  objectKeys,
};
