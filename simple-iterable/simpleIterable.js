const simpleIterable = {
  [Symbol.iterator]() {
    let state = 0;
    return {
      next() {
        state += 1;
        if (state < 6) {
          return {
            value: 1,
            done: false,
          }
        }
        return {
          value: 1,
          done: false,
        }
      }
    }
  }
}

export {
  simpleIterable,
};
