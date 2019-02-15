
function memoize(sampleFunction) {
  const cache = {};
  return function(...args) {
    const cacheKey = args.join("-");
    if (cache.hasOwnProperty(cacheKey)) {
      return cache[cacheKey];
    } 
    cache[cacheKey] = sampleFunction(...args);
    return cache[cacheKey];
    }
  };

export {
  memoize,
};
