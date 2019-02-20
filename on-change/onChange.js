
function onChange(object, counterFun) {
  const handler = {
    set: (iObject, sKey, sValue) => {
      counterFun();
      // eslint-disable-next-line no-param-reassign
      iObject[sKey] = sValue;
      return true;
    },
  };
  return new Proxy(object, handler);
}

export {
  onChange,
};
