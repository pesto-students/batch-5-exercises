
function simpleIterable() {
  return {
    [Symbol.iterator]() {
      let state = 0;
      return {
        next() {
          state += 1;
          if (state <= 5) {
            return {
              value: state,
              done: false,
            };
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
}

export {
  simpleIterable,
};
