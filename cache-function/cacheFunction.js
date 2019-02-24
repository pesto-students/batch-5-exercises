function cacheFunction(cb) {
  const argsList = [];
  return arg => {
    if (!argsList.includes(arg)) {
      argsList.push(arg);
      return cb(arg);
    }
  };
}
export { cacheFunction };
