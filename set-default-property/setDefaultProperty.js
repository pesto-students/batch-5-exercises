
function setDefaultProperty(obj, defaultValue) {
  const handler = {
    get(target, property) {
      if (property in target) {
        return target[property];
      }
      return defaultValue;
    },
  };
  return new Proxy(obj, handler);
}

export {
  setDefaultProperty,
};
