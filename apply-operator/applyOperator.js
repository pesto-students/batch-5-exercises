function applyOperator() {
  if (arguments.length === 1) return 0;
  if (arguments.length > 1) {
    var op = arguments[0];

    var result = op === '+' || op === '-' ? 0 : 1;
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
  throw new Error();
}
export { applyOperator };
