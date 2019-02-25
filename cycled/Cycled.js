function iter(arr) {
  return {
    [Symbol.iterator]() {
      let i = 0;
      return {
        next() {
          i += 1;
          if (i === arr.length) {
            // return {
            //   value: undefined,
            //   done: true,
            // };
            i = 0;
          }
          const result = {
            value: arr[i],
            done: false,
          };
          return result;
        },
        current() {
          return arr[i];
        },
        previous() {
          i = i === 0 ? arr.length - 1 : i - 1;
          return arr[i];
        },
      };
    },
  };
}
class Cycled {
  constructor(arr) {
    this.iter = iter(arr)[Symbol.iterator]();
  }

  next() {
    return this.iter.next().value;
  }

  current() {
    return this.iter.current();
  }

  previous() {
    return this.iter.previous();
  }
}

export {
  Cycled,
};
