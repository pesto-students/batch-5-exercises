function applyOperator() {
  if (argument.length > 1) {
    var op = arguments[0];

    var result = 0;
    for (var i = 1; i < arguments.length; i++) {
      if (typeof arguments[i] !== 'number') {
        break;
      } else {
        if (op === '+') result += arguments[i];
        else if (op === '-') result -= arguments[i];
        else if (op === '*') result *= arguments[i];
        else if (op === '%') result %= arguments[i];
      }
    }
    return result;
  }
  return 0;
}
export { applyOperator };
