
function limitFunctionCallCount(callBack, limit) {
  var callBackInvokeCount = 0;
  return (...args) => {
    if (callBackInvokeCount === limit) {
      return null;
    }
    callBackInvokeCount += 1;
    return callBack(...args);
  }
}

export {
  limitFunctionCallCount,
};
