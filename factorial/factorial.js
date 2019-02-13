function factorial(...args) {
  if (args[0] === 0)
    return 1
  else
    return args[0] * factorial(args[0] - 1)
}

module.exports = factorial;