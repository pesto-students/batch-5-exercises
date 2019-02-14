function objectValues(obj) {
  return Object.keys(obj).reduce((acc, elm) => [...acc, obj[elm]], []);
}

export { objectValues };
