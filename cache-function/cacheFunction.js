
function cacheFunction(func) {
  var cache = {};
  return function (x) {
    if (x in cache) {
      return cache[x];
    }
    else {
      cache[x] = func(x);
      return cache[x];
    }
  }
}

export {
  cacheFunction,
};
