
function type(input) {
  let result;
  result = typeof input;
  if (input === null) {
    result = 'null';
  }
  if (/\/.*\//.test(input)) {
    result = 'RegExp';
  }
  if (result === 'object' && Array.isArray(input)) {
    result = 'array';
  }
  return result[0].toUpperCase() + result.slice(1);
}

export {
  type,
};
