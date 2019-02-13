function counter(...args) {
  var isCalled = false
  var iterationNo = 0;

  return () => {
    iterationNo += 1;
    return iterationNo;
  };
}


export {
  counter,
};