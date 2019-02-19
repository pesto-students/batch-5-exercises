
function fibonacciIter() {
  return {
    [Symbol.iterator]() {
      let n1 = 1;
      let n2 = 1;
      let fib = n1 + n2;
      return {
        next() {
          const result = {
            value: fib,
            done: false,
          };
          n1 = n2;
          n2 = fib;
          fib = n1 + n2;
          return result;
        },
      };
    },
  };
}

export {
  fibonacciIter,
};
