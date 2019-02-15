function lowercaseKeys(obj) {
  return Object.keys(obj).reduce(
    (resultObj, key) => ({ ...resultObj, [key.toLowerCase()]: obj[key] }),
    {}
  );
}

export { lowercaseKeys };
