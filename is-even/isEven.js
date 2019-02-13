function isEven(number) {
  var isNumEven = true;
  for (var i = 1; i <= number; i++) {
    isNumEven = !isNumEven;
  }
  return isNumEven;
}

export { isEven };
