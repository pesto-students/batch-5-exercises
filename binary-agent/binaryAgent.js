function binaryAgent(...args) {
  var binaryNoArray = args[0].split(' ');
  var resultString = binaryNoArray.map((binaryNo) => {
    return String.fromCharCode(parseInt(binaryNo, 2));
  }).join("");
  return resultString;
};


export {
  binaryAgent,
};