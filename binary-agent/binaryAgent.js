
function binaryAgent(binaryString) {
  var str = '';
  binaryString = binaryString.split(' ');
  return binaryString.reduce((str, byte) => str + String.fromCharCode(convertBinaryToDecimal(byte)), '');
}
function convertBinaryToDecimal(byte) {
  byte = byte.split('');
  return byte.reduce((acc, bit, i) => acc + (Number(bit) ? (Math.pow(2, (Number(bit) * (byte.length - i - 1)))) : 0), 0);
}
export {
  binaryAgent,
};
