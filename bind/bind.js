
function bind(...args) {
  var argsList = [...args];
  var func = argsList[0];
  var argsToBind = argsList.slice(1);
  return func.bind(...argsToBind);
}

export {
  bind,
};
