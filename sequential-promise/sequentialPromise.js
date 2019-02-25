
function sequentialPromise([p1, p2, p3]) {
  let result = p1()
    .then(res => p2(res));
  if (p3) {
    result = result.then(res => p3(res));
  }
  return result;
}

export {
  sequentialPromise,
};
