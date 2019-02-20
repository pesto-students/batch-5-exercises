function getHandler(defaultValue) {
  return {
    get(obj, key) {
      if (key in obj) {
        return obj[key];
      }
      return defaultValue;
    },
  };
}
function setDefaultProperty(obj, defaultValue) {
  return new Proxy(obj, getHandler(defaultValue));
}

export {
  setDefaultProperty,
};
