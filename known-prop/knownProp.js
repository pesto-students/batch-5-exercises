let handler = {
  get: function(targetObject, key) {
    if (key in targetObject) {
      return targetObject[key];
    }
    throw new TypeError('Unknown property: bar');
  }
};

function knownProp(sampleObject) {
  const proxyObject = new Proxy(sampleObject, handler);
  return proxyObject;
}

export {
  knownProp,
};
