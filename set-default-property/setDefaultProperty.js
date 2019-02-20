
function setDefaultProperty(object, defaultValue) {
  const handler = {
    get: (obj, prop) => {
      if (prop in obj) {
        return obj[prop];
      }
      return defaultValue;
    },
  };
  return new Proxy(object, handler);
}

export {
  setDefaultProperty,
};
