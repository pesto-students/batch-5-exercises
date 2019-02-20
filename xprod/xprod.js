function xprod(arr1, arr2) {
  if (arr1.length === 0 || arr1.length === 0) {
    return [];
  }
  return arr1.reduce((acc, itemOuter) => [...acc, ...arr2.map(itemInner => [itemOuter, itemInner])], []);
}

export {
  xprod,
};
