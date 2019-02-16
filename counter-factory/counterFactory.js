function counterFactory() {
  var x = 0;

  return {
    increment: function () {
      return ++x;
    },
    decrement: function () {
      return --x;
    }
  };
}

export { counterFactory };
