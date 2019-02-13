function diffArray(...args) {
  var newArray = args[0].filter((item) => {
    return args[1].indexOf(item) === -1;
  });

  newArray = newArray.concat(
    args[1].filter((item) => {
      return args[0].indexOf(item) === -1;
    })
  )
  return newArray;
}

export {
  diffArray,
};