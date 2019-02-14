function objectPairs(obj) {
  return Object.keys(obj).reduce((acc, elm) => {
    if (acc.length == 0) {
      return [[elm, obj[elm]]];
    } else {
      return [...acc, [elm, obj[elm]]];
    }
  }, []);
}

export { objectPairs };
