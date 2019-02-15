function memoize(func) {
  var cache = {};
  return function(...args) {
    var argKey = args.join("-");
    if (cache.hasOwnProperty(argKey)) {
      return cache[argKey];
    } else {
      cache[argKey] = func(...args);
      return cache[argKey];
    }
  };
}

export { memoize };
