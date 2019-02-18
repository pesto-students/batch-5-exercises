
function bind(functionToBind, ...objectToBind) {
  return functionToBind.bind(...objectToBind);
}

export {
  bind,
};
