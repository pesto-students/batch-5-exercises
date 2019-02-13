
function binaryAgent(binaryStr) {
  return binaryStr.split(' ').reduce((sentence, binary) => (sentence += getCharFromBinary(binary)), '');
}

function getCharFromBinary(binary) {
  return String.fromCharCode(parseInt(binary, 2));
}

export {
  binaryAgent,
};
