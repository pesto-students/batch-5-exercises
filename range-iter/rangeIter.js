function* rangeIter(start, end) {
  if (start === undefined || end === undefined) {
    // new TypeError('undefined is not a number');
  }
  let i = start;
  while (i <= end) {
    yield i;
    i += 1;
  }
  // return {
  //   [Symbol.iterator]() {
  //     return {
  //       next() {
  //         if (start < end) {
  //           const result = [];
  //           let i = start;
  //           while (i <= end) {
  //             result.push(i);
  //             i += 1;
  //           }
  //           return { value: 12, done: true };
  //         }
  //         return { value: undefined, done: true };
  //       },
  //     };
  //   },
  // };
}

export { rangeIter };
