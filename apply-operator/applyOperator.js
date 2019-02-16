function applyOperator() {
  if (arguments.length === 1) return 0;
  if (arguments.length > 1) {
    var operator = arguments[0];
    var initialValue;
    if (operator === '-') { initialValue = -arguments[1]; }
    else { initialValue = arguments[1]; }
    var result = initialValue;

    for (var i = 2; i < arguments.length; i++) {
      if (typeof arguments[i] !== 'number') {
        break;
      } else {
        if (operator === '+') {
          result += arguments[i];
        }
        else if (operator === '-') {
          result -= arguments[i];
        }
        else if (operator === '*') {
          result *= arguments[i];
        }
        else if (operator === '%') {
          result %= arguments[i];
        }
        else if (operator === '/') {
          result /= arguments[i];
          result = Number(result.toFixed(4));
        }
      }
    }
    return result;
  }
  throw new Error();
}
export { applyOperator };
