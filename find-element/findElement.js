function findElement(...args) {
  var element = args[0];
  var operatingFunction = args[1];
  var result = element.filter(operatingFunction)
  return result.length > 0 ? result[0] : undefined;
}

export {
  findElement,
};