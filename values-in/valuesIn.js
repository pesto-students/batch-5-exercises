
function valuesIn(obj) {
  const allKeys = Object.keys(obj).concat(Object.keys(Object.getPrototypeOf(obj)));
  return allKeys.reduce((values, key) => [...values, obj[key]], []);
}

export {
  valuesIn,
};
