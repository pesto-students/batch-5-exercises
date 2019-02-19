
function simpleIterable() {
  const iterable = {
    [Symbol.iterator]() {
      let value = 0;
      let done = false;
      return {
        next() {
          value += 1;
          if (value > 5) {
            done = true;
            value = undefined;
          }
          return {
            value,
            done,
          };
        },
      };
    },
  };
  return iterable;
}

export {
  simpleIterable,
};
