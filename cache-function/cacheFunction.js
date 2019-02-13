function cacheFunction(...args) {
  return () => {
    var func = {}
    if (JSON.stringify(args[0]) in func)
      return func[JSON.stringify(args[0])]
    else {
      func[JSON.stringify(args[0])] = args[0]
      return args[0]
    }
  }
}

export {
  cacheFunction,
};