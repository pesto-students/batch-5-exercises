
function without(elementsToRemove, elements) {
  // eslint-disable-next-line no-param-reassign
  elementsToRemove = new Set(elementsToRemove);
  return elements.filter(item => !elementsToRemove.has(item));
}

export {
  without,
};
