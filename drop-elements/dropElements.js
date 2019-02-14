function dropElements(...args) {
  var elements = args[0];
  var reducingFunction = args[1];
  var result = elements.filter(reducingFunction, []);
  return result
}

export {
  dropElements,
};