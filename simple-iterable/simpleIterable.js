const Iterable = {
  value: 0,
  [Symbol.iterator]() {
    this.value = 0;
    return this;
  },
  next() {
    this.value += 1;
    if (this.value === 6) {
      return {
        value: undefined,
        done: true,
      };
    }
    return {
      value: this.value,
      done: false,
    };
  },
};

function simpleIterable() {
  return Iterable;
}

export {
  simpleIterable,
};
