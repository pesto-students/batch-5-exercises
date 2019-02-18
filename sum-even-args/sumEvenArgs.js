
function sumEvenArgs(...args) {
  var argsArr = [...args];
  return argsArr.reduce((evenTotal, item) => (evenTotal = item % 2 == 0 ? evenTotal + item : evenTotal), 0);
}

export {
  sumEvenArgs,
};
