function counter() {
  var count = 0;
  return function() {
    count++;
    return count;
  };
}

export { counter };
