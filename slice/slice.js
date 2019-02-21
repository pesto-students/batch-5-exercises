
function slice(start, end, input) {
  if (start < 0 || end < 0 || start === end) {
    return '';
  }
  let inp;
  if (typeof input === 'string') {
    inp = input.split('');
  }
  const result = inp.reduce((acc, el, i) => {
    if (i >= start && i < end) {
      return [...acc, inp[i]];
    }
    return acc;
  }, []);
  return typeof input === 'string' ? result.join('') : result;
}

export {
  slice,
};
