
function isIterable(iterable) {
  if (typeof iterable[Symbol.iterator] === 'function') {
    return true;
  }
  return false;
}

export {
  isIterable,
};
