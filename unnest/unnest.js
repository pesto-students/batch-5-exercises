const isANumber = key => /^[0-9]$/gi.test(key);
function unnest(input) {
  let source;
  if (!Array.isArray(input)) {
    const validKeys = Object.keys(input).filter(key => isANumber(key));
    source = validKeys.map(key => input[key]);
  } else {
    source = input.slice();
  }
  return source.reduce((acc, cur) => {
    let result = [];
    if (Array.isArray(cur)) {
      result = cur;
    } else {
      result = [cur];
    }
    return acc.concat(result);
  }, []);
}

export {
  unnest,
};
