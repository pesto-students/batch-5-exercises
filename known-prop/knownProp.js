const handler = {
  get(obj, key) {
    if (key in obj) {
      return obj[key];
    }
    throw new TypeError(`Unknown property : ${key}`);
  },
};
function knownProp(obj) {
  return new Proxy(obj, handler);
}

export {
  knownProp,
};
