
function isIterableEmpty(iterable) {
  const iterableValue = iterable[Symbol.iterator]().next().value;
  if (typeof iterableValue === 'undefined') {
    return true;
  }
  return false;
}

export {
  isIterableEmpty,
};
