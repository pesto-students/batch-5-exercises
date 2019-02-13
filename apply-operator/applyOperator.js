function applyOperator(...args) {

  if (args.length === 1)
    return 0;

  if (args.length > 0) {
    var operator = args[0];
    args = args.slice(1, args.length);
    if (operator === '-')
      args = operator + args.join(operator)
    else
      args = args.join(operator)

    var result = eval(args)
    if (operator === '/')
      result = parseFloat(result.toFixed(4))
    return result;
  } else {
    throw Error('Please define an operator');
  }
  return args;
}

module.exports = applyOperator