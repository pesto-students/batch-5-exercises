
const fibonacciIter = {
  prev: 1,
  current: 1,
  [Symbol.iterator]() {
    this.prev = 1;
    this.current = 1;
    return this;
  },
  next() {
    const { current } = this;
    this.current = this.prev + this.current;
    this.prev = current;
    return {
      value: current,
      done: false,
    };
  },
};


export {
  fibonacciIter,
};
