
function toPairs(obj) {
  const keyList = Object.keys(obj);
  return keyList.reduce((pairList, key) => [...pairList, [key, obj[key]]], []);
}

export {
  toPairs,
};
