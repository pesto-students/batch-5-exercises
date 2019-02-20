
function unnest(nestedArr) {
  return Array.from(nestedArr).reduce((result, elm) => {
    if (Array.isArray(elm)) {
      return [...result, ...elm];
    }
    return [...result, elm];
  }, []);
}

export {
  unnest,
};
