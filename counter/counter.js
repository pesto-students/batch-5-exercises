function counter() {
  var x = 0;
  return function() {
    return ++x;
  };
}

export { counter };
