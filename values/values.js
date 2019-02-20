
function values(obj) {
  const allKeys = Object.keys(obj);
  return allKeys.reduce((vals, key) => [...vals, obj[key]], []);
}

export {
  values,
};
