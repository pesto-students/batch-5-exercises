var sum = 0;
function limitFunctionCallCount(cb, limit) {
  ++sum;
  return sum < limit ? cb : null;
}

export {
  limitFunctionCallCount,
};
