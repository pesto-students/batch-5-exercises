
function sleep(ms) {
  const p = new Promise(res => setTimeout(res, ms));
  function innerFn(value) {
    return p.then(() => value);
  }
  innerFn.then = (...args) => p.then(...args);
  innerFn.catch = Promise.resolve().catch;
  // innerFn.then = () => p;
  return innerFn;
}

export {
  sleep,
};
