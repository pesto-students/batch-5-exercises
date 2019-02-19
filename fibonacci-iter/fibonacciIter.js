

const fibonacciIter = {
  [Symbol.iterator]() {
    let firstNum = 0;
    let secondNum = 1;
    return {
      next() {
        const sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;
        return {
          value: sum,
          done: false,
        };
      },
    };
  },
};


export {
  fibonacciIter,
};
