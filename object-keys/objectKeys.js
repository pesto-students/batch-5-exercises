function objectKeys(operatingObject) {
  var keys = [];
  for (var key in operatingObject) {
    keys = keys.concat([key])
  };
  return keys;
}

export {
  objectKeys,
};