
function isIterable(data) {
  return Boolean(typeof data[Symbol.iterator] === 'function');
}

export {
  isIterable,
};
