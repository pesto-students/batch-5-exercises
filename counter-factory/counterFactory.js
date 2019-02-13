function counterFactory() {
  var x = 0;

  return {
    increment: function increment() {
      return ++x;
    },
    decrement: function increment() {
      return ++x;
    }
  };
}

export { counterFactory };
