
function simpleIterable() {
  return {
    [Symbol.iterator]() {
      let value = 0;
      return {
        next() {
          value += 1;
          if (value < 6) {
            return {
              value: value,
              done: false,
            }
          }
          return {
            value: undefined,
            done: true,
          }
        }
      }
    }
  }
}

// const simpleIterable = {
//   [Symbol.iterator]() {
//     let state = 0;
//     return {
//       next() {
//         state += 1;
//         if (state < 6) {
//           return {
//             value: 1,
//             done: false,
//           }
//         }
//         return {
//           value: 1,
//           done: false,
//         }
//       }
//     }
//   }
// }

export {
  simpleIterable,
};
