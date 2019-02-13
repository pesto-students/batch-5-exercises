function applyOperator() {
  var args = Array.prototype.slice.call(arguments);
  var operator = args[0];
  if (args.length == 0) {
    throw Error("Cant pass function without parameters");
  } else if (args.length == 1) {
    return 0;
  } else if (args.length == 2) {
    var number = args[1];
    if (["*", "/", "%"].indexOf(operator) > -1) {
      return number;
    }
    if (["+", "-"].indexOf(operator) > -1) {
      return eval(operator + number);
    }
  } else {
    var numbers = args.slice(1);
    if (["*", "%"].indexOf(operator) > -1) {
      return eval(numbers.join(operator));
    } else if (operator == "/") {
      var calculated = eval(numbers.join(operator));
      return parseFloat(calculated.toFixed(4));
    } else if (["+", "-"].indexOf(operator) > -1) {
      return eval(operator + numbers.join(operator));
    }
  }
}

export { applyOperator };
