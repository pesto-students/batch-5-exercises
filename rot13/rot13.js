function rot13(encoded) {
  var decoded = '';
  for (let i = 0; i < encoded.length; i++) {
    var charCode = encoded.charCodeAt(i);
    var decodedChar;
    if (charCode >= 65 && charCode <= 90) {
      decodedChar = String.fromCharCode(charCode - 13);
      decoded += decodedChar;
    } else {
      decoded += encoded[i];
    }
  }
  return decoded;
}

export { rot13 };
