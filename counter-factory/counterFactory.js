function counterFactory(...args) {
  var iterationNo = 0;
  return {
    decrement: () => {
      iterationNo -= 1;
      return iterationNo;
    },
    increment: () => {
      iterationNo += 1;
      return iterationNo;
    }
  };
}

export {
  counterFactory,
};