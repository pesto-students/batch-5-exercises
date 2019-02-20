
function knownProp(object) {
  const handler = {
    get: (obj, prop) => {
      if (prop in obj) {
        return obj[prop];
      }
      throw TypeError();
    },
  };

  return new Proxy(object, handler);
}

export {
  knownProp,
};
