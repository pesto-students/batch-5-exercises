function rot13(encoded) {
  var decoded = '';
  for (let i = 0; i < encoded.length; i++) {
    var charCode = encoded.charCodeAt(i);
    /* Wrap charcode between 65-90 */
    if (charCode >= 65 && charCode <= 90) {
      var decodedCharCode = charCode - 13;
      decodedCharCode = decodedCharCode < 65 ? 90 - (65 - decodedCharCode) + 1 : decodedCharCode;
      var decodedChar = String.fromCharCode(decodedCharCode);
      decoded += decodedChar;
    } else {
      decoded += encoded[i];
    }
  }

  return decoded;
}

export { rot13 };
