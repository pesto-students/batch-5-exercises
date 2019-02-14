function objectDefaults(...args) {
  var objectToMerge = args[0];
  var defaultObject = args[1];
  return {
    ...objectDefaults,
    ...defaultObject,
  };
}

export {
  objectDefaults,
};